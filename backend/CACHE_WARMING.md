# Cache Warming Strategy

## Overview
Cache warming là chiến lược pre-load dữ liệu vào cache để cải thiện performance và giảm response time cho users.

## Implementation

### 1. **Automatic Cache Warming**

#### On Application Startup
- Tự động warm cache khi ứng dụng khởi động
- Pre-load top 100 frequent users vào cache
- Location: `StartupService.onApplicationBootstrap()`

#### Scheduled Cache Warming
- **Every 2 hours**: Warm cache cho frequent users
- **Daily at 6 AM**: Full cache warmup
- Location: `TasksService` cron jobs

### 2. **On-demand Cache Warming**

#### After User Login
- Warm cache cho user vừa login thành công
- Async operation (không block login process)
- Location: `AuthService.login()`

#### Manual Cache Warming
- Admin endpoint: `POST /cache/warm/frequent-users`
- Monitoring endpoint: `GET /cache/stats`

### 3. **Cache Warming Logic**

#### Frequent Users Detection
```typescript
// Users who:
// - Have active accounts (isActive: true, idDelete: false)
// - Have recent sessions
// - Updated within last 7 days
// - Limited to top 100 users
```

#### Cache Keys Warmed
- `user:id:{userId}` - User by ID
- `user:email:{email}` - User by email

### 4. **Monitoring & Metrics**

#### Cache Metrics
- Hit/Miss ratio tracking
- Operation timing
- Cache warming success/failure logs

#### Endpoints
- `GET /cache/metrics` - Full metrics
- `GET /cache/metrics/summary` - Summary only
- `GET /cache/stats` - Cache statistics

### 5. **Configuration**

#### Cache TTL
- Regular cache: `AUTH_CONSTANTS.MAX_AGE_CACHE`
- Temporary cache: `AUTH_CONSTANTS.MAX_AGE_CACHE_TEMPORARY`

#### Cron Schedule
- Cache warming: `0 0 */2 * * *` (every 2 hours)
- Daily warmup: `0 0 6 * * *` (6 AM daily)
- Metrics logging: `0 0 * * * *` (every hour)

## Benefits

### Performance Improvements
- ⚡ Faster user lookup operations
- 🚀 Reduced database load
- 📈 Better user experience for frequent users

### Resource Optimization
- 💾 Optimal memory usage
- 🔄 Predictable cache warming patterns
- 📊 Monitoring and observability

## Usage Examples

### Manual Cache Warming
```bash
# Warm frequent users cache
curl -X POST http://localhost:4000/cache/warm/frequent-users

# Check cache metrics
curl http://localhost:4000/cache/metrics/summary
```

### Log Monitoring
```bash
# Look for cache warming logs
[TasksService] Starting cache warming for frequent users...
[TasksService] Cache warming completed: 87 users cached

# Look for startup logs
[StartupService] Initial cache warming completed: 92 users pre-loaded
```

## Future Enhancements

### Potential Improvements
1. **Smart Cache Warming**: Based on user behavior patterns
2. **Geographic Cache Warming**: Pre-load users by location
3. **Predictive Cache Warming**: ML-based user activity prediction
4. **Cache Warming Throttling**: Prevent overload during high traffic
