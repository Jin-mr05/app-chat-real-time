import { Injectable, Logger } from '@nestjs/common';

export interface CacheMetrics {
	hits: number;
	misses: number;
	totalRequests: number;
	hitRate: number;
	avgResponseTime: number;
	lastUpdated: Date;
}

export interface CacheOperationResult<T> {
	data: T;
	fromCache: boolean;
	responseTime: number;
}

@Injectable()
export class CacheMetricsService {
	private readonly logger = new Logger(CacheMetricsService.name);
	private metrics: Map<string, CacheMetrics> = new Map();

	// Record cache operation
	recordCacheOperation(
		operation: string,
		hit: boolean,
		responseTime: number
	): void {
		const existing = this.metrics.get(operation) || {
			hits: 0,
			misses: 0,
			totalRequests: 0,
			hitRate: 0,
			avgResponseTime: 0,
			lastUpdated: new Date()
		};

		existing.totalRequests++;

		if (hit) {
			existing.hits++;
		} else {
			existing.misses++;
		}

		existing.hitRate = (existing.hits / existing.totalRequests) * 100;

		// Calculate rolling average response time
		existing.avgResponseTime =
			(existing.avgResponseTime * (existing.totalRequests - 1) + responseTime) /
			existing.totalRequests;

		existing.lastUpdated = new Date();

		this.metrics.set(operation, existing);

		// Log warning for low hit rates
		if (existing.totalRequests >= 10 && existing.hitRate < 50) {
			this.logger.warn(
				`Low cache hit rate for ${operation}: ${existing.hitRate.toFixed(2)}%`
			);
		}
	}

	// Get metrics for specific operation
	getMetrics(operation: string): CacheMetrics | undefined {
		return this.metrics.get(operation);
	}

	// Get all metrics
	getAllMetrics(): Record<string, CacheMetrics> {
		const result: Record<string, CacheMetrics> = {};
		this.metrics.forEach((value, key) => {
			result[key] = value;
		});
		return result;
	}

	// Reset metrics
	resetMetrics(operation?: string): void {
		if (operation) {
			this.metrics.delete(operation);
		} else {
			this.metrics.clear();
		}
	}

	// Get summary statistics
	getSummary(): {
		totalOperations: number;
		averageHitRate: number;
		totalHits: number;
		totalMisses: number;
	} {
		let totalOperations = 0;
		let totalHits = 0;
		let totalMisses = 0;

		this.metrics.forEach(metric => {
			totalOperations += metric.totalRequests;
			totalHits += metric.hits;
			totalMisses += metric.misses;
		});

		const averageHitRate = totalOperations > 0
			? (totalHits / totalOperations) * 100
			: 0;

		return {
			totalOperations,
			averageHitRate,
			totalHits,
			totalMisses
		};
	}

	// Log periodic summary (call this in a cron job)
	logSummary(): void {
		const summary = this.getSummary();

		this.logger.log(`
=== Cache Metrics Summary ===
Total Operations: ${summary.totalOperations}
Average Hit Rate: ${summary.averageHitRate.toFixed(2)}%
Total Hits: ${summary.totalHits}
Total Misses: ${summary.totalMisses}

=== Per Operation Metrics ===`);

		this.metrics.forEach((metrics, operation) => {
			this.logger.log(
				`${operation}: ${metrics.hitRate.toFixed(2)}% hit rate, ` +
				`${metrics.totalRequests} requests, ` +
				`${metrics.avgResponseTime.toFixed(2)}ms avg`
			);
		});
	}
}
