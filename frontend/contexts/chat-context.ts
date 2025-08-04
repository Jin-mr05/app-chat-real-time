const sendMessage = (chatId: string, content: string) => {
    if (!currentUser) return

    const optimisticMessage: Message = {
      id: `temp-${Date.now()}`,
      senderId: currentUser.id,
      content,
      timestamp: new Date(),
      type: 'text',
      isRead: false,
      chatId,
    }

    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              messages: [...chat.messages, optimisticMessage],
              lastMessage: optimisticMessage,
            }
          : chat,
      ),
    )

    if (socket && isConnected && config.USE_REAL_BACKEND) {
      const joinChat = (chatId: string) => {
        if (socket && isConnected && config.USE_REAL_BACKEND) {
          const chat = chats.find(c => c.id === chatId)
          const isGroup = chat?.type === 'group'
          
          let targetId = chatId
          if (!isGroup && chat && chat.participants.length === 2 && currentUser) {
            const otherUser = chat.participants.find(p => p.id !== currentUser.id)
            targetId = otherUser?.id || chatId
          }
      
          socket.emit('join-chat', { 
            type: isGroup ? 'group' : 'private', 
            targetId 
          })
        }
      }
      const messageData = {
        type: isGroup ? 'group' : 'private',
        targetId,
        message: content,
      }
      socket.emit('send_message', messageData)
    } else {
      setTimeout(() => {
        const mockResponse: Message = {
          id: `mock-${Date.now()}`,
          senderId: activeChat?.participants.find((p) => p.id !== currentUser.id)?.id || '1',
          content: `Echo: ${content} (Chế độ demo)`,
          timestamp: new Date(),
          type: 'text',
          isRead: false,
          chatId,
        }

        setChats((prevChats) =>
          prevChats.map((chat) =>
            chat.id === chatId
              ? {
                  ...chat,
                  messages: [...chat.messages, mockResponse],
                  lastMessage: mockResponse,
                }
              : chat,
          ),
        )
      }, 500)
    }
  }