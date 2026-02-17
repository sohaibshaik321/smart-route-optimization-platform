// Mock data simulating backend/optimization execution output

export interface RouteOutput {
  id: string
  driverName: string
  status: 'On Time' | 'Delayed' | 'At Risk'
  durationMin: number
  fuelLiters: number
  delayRiskPercent: number
  score: number
  stops: number
}

export interface DashboardMetrics {
  totalRoutes: number
  onTimeRate: number
  avgDeliveryTimeMin: number
  fuelSavingsPercent: number
}

// Simulated route optimization execution results
export function getRouteExecutionOutput(): RouteOutput[] {
  return [
    { id: 'R-001', driverName: 'Mike Johnson', status: 'On Time', durationMin: 142, fuelLiters: 8.2, delayRiskPercent: 12, score: 87, stops: 4 },
    { id: 'R-002', driverName: 'Sarah Williams', status: 'At Risk', durationMin: 198, fuelLiters: 11.5, delayRiskPercent: 38, score: 72, stops: 5 },
    { id: 'R-003', driverName: 'David Brown', status: 'On Time', durationMin: 165, fuelLiters: 9.1, delayRiskPercent: 18, score: 84, stops: 4 },
    { id: 'R-004', driverName: 'Emily Davis', status: 'Delayed', durationMin: 220, fuelLiters: 12.8, delayRiskPercent: 55, score: 61, stops: 6 },
    { id: 'R-005', driverName: 'Mike Johnson', status: 'On Time', durationMin: 128, fuelLiters: 7.4, delayRiskPercent: 8, score: 91, stops: 3 },
  ]
}

// Simulated dashboard metrics from execution
export function getDashboardExecutionOutput(): DashboardMetrics {
  return {
    totalRoutes: 5,
    onTimeRate: 72.5,
    avgDeliveryTimeMin: 171,
    fuelSavingsPercent: 14.2,
  }
}

// Simulated optimization engine output (last run result)
export function getLastOptimizationOutput() {
  return {
    timestamp: new Date().toISOString(),
    inputStops: 22,
    optimizedOrder: [1, 3, 2, 5, 4, 6, 8, 7, 9, 10],
    originalEstimateMin: 245,
    optimizedEstimateMin: 198,
    trafficMultiplier: 1.24,
    weatherRisk: 0.15,
    driverScore: 0.82,
    improvementPercent: 19.2,
  }
}
