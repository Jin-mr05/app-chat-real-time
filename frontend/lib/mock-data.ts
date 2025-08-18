export const mockUsers = [
  {
    id: "1",
    userName: "john_doe",
    email: "john@example.com",
    password: "Password123!",
  },
  {
    id: "2",
    userName: "jane_smith",
    email: "jane@example.com",
    password: "SecurePass456@",
  },
  {
    id: "3",
    userName: "bob_wilson",
    email: "bob@example.com",
    password: "MyPassword789#",
  },
  {
    id: "4",
    userName: "alice_brown",
    email: "alice@example.com",
    password: "StrongPass012$",
  },
]

export const mockRooms = [
  {
    id: "room1",
    name: "General Discussion",
    members: ["john_doe", "jane_smith", "bob_wilson"],
    lastMessage: "Hey everyone! How's the project going?",
    lastMessageTime: "2024-01-15T10:30:00Z",
  },
  {
    id: "room2",
    name: "Project Team",
    members: ["john_doe", "alice_brown"],
    lastMessage: "Meeting scheduled for 3pm today",
    lastMessageTime: "2024-01-15T09:15:00Z",
  },
  {
    id: "room3",
    name: "Random Chat",
    members: ["jane_smith", "bob_wilson", "alice_brown"],
    lastMessage: "Anyone up for lunch?",
    lastMessageTime: "2024-01-15T11:45:00Z",
  },
]

export const mockMessages = [
  {
    id: "msg1",
    content: "Hello everyone! Welcome to the chat room.",
    sender: "john_doe",
    timestamp: "2024-01-15T08:00:00Z",
    roomId: "room1",
  },
  {
    id: "msg2",
    content: "Thanks John! Excited to be here.",
    sender: "jane_smith",
    timestamp: "2024-01-15T08:05:00Z",
    roomId: "room1",
  },
  {
    id: "msg3",
    content: "How's everyone doing today?",
    sender: "bob_wilson",
    timestamp: "2024-01-15T08:10:00Z",
    roomId: "room1",
  },
  {
    id: "msg4",
    content: "Great! Working on the new features.",
    sender: "alice_brown",
    timestamp: "2024-01-15T08:15:00Z",
    roomId: "room1",
  },
  {
    id: "msg5",
    content: "Let's discuss the project timeline in our team room.",
    sender: "john_doe",
    timestamp: "2024-01-15T09:00:00Z",
    roomId: "room2",
  },
]

// Test cases for validation
export const testValidationCases = {
  // Valid test cases
  validUsernames: ["john_doe", "user123", "test-user", "a_b_c"],
  validEmails: ["test@example.com", "user.name@domain.co.uk", "admin@company.org"],
  validPasswords: ["Password123!", "SecurePass456@", "MyPassword789#"],
  validRoomNames: ["General Chat", "Project Team", "Random_Discussion", "Team-Alpha"],
  validMessages: ["Hello world!", "How are you doing today?", "Let's meet at 3pm"],

  // Invalid test cases
  invalidUsernames: [
    { value: "", error: "Username is required" },
    { value: "ab", error: "Username must be at least 3 characters" },
    { value: "a".repeat(21), error: "Username must be less than 20 characters" },
    { value: "user@name", error: "Username can only contain letters, numbers, hyphens, and underscores" },
    { value: "user name", error: "Username can only contain letters, numbers, hyphens, and underscores" },
  ],

  invalidEmails: [
    { value: "", error: "Email is required" },
    { value: "invalid-email", error: "Please enter a valid email address" },
    { value: "user@", error: "Please enter a valid email address" },
    { value: "@domain.com", error: "Please enter a valid email address" },
    { value: "user.domain.com", error: "Please enter a valid email address" },
  ],

  invalidPasswords: [
    { value: "", error: "Password is required" },
    { value: "short", error: "Password must be at least 8 characters" },
    { value: "password123", error: "Password must contain at least one uppercase letter" },
    { value: "PASSWORD123", error: "Password must contain at least one lowercase letter" },
    { value: "Password", error: "Password must contain at least one number" },
    { value: "Password123", error: "Password must contain at least one special character (@$!%*?&)" },
  ],

  invalidRoomNames: [
    { value: "", error: "Room name is required" },
    { value: "a", error: "Room name must be at least 2 characters" },
    { value: "a".repeat(51), error: "Room name must be less than 50 characters" },
    { value: "room@name", error: "Room name can only contain letters, numbers, spaces, hyphens, and underscores" },
  ],

  invalidMessages: [
    { value: "", error: "Message cannot be empty" },
    { value: "   ", error: "Message cannot be empty" },
    { value: "a".repeat(1001), error: "Message must be less than 1000 characters" },
  ],
}

// Helper function to test validation
export const runValidationTests = () => {
  console.log("=== VALIDATION TEST RESULTS ===")

  console.log("\n✅ Valid Test Cases:")
  console.log("Valid usernames:", testValidationCases.validUsernames)
  console.log("Valid emails:", testValidationCases.validEmails)
  console.log("Valid passwords:", testValidationCases.validPasswords)
  console.log("Valid room names:", testValidationCases.validRoomNames)
  console.log("Valid messages:", testValidationCases.validMessages)

  console.log("\n❌ Invalid Test Cases:")
  console.log("Invalid usernames:", testValidationCases.invalidUsernames)
  console.log("Invalid emails:", testValidationCases.invalidEmails)
  console.log("Invalid passwords:", testValidationCases.invalidPasswords)
  console.log("Invalid room names:", testValidationCases.invalidRoomNames)
  console.log("Invalid messages:", testValidationCases.invalidMessages)
}
