import {
  getRouteExecutionOutput,
  getDashboardExecutionOutput,
  getLastOptimizationOutput,
} from './data'

export default function Home() {
  const routes = getRouteExecutionOutput()
  const metrics = getDashboardExecutionOutput()
  const optimization = getLastOptimizationOutput()

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-slate-800 text-white px-6 py-4">
        <h1 className="text-xl font-bold">Smart Route Optimization Platform</h1>
        <p className="text-slate-300 text-sm">AI-powered logistics — execution output</p>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-6">
        {/* Dashboard metrics (from execution) */}
        <section>
          <h2 className="text-lg font-semibold text-slate-800 mb-3">Dashboard metrics (execution output)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow p-4">
              <p className="text-xs text-slate-500 uppercase">Total routes</p>
              <p className="text-2xl font-bold text-slate-900">{metrics.totalRoutes}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <p className="text-xs text-slate-500 uppercase">On-time rate</p>
              <p className="text-2xl font-bold text-emerald-600">{metrics.onTimeRate}%</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <p className="text-xs text-slate-500 uppercase">Avg delivery time</p>
              <p className="text-2xl font-bold text-slate-900">{metrics.avgDeliveryTimeMin} min</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <p className="text-xs text-slate-500 uppercase">Fuel savings</p>
              <p className="text-2xl font-bold text-amber-600">{metrics.fuelSavingsPercent}%</p>
            </div>
          </div>
        </section>

        {/* Last optimization run output */}
        <section>
          <h2 className="text-lg font-semibold text-slate-800 mb-3">Last optimization run (code execution result)</h2>
          <div className="bg-white rounded-lg shadow p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-slate-700 whitespace-pre-wrap break-all">
{JSON.stringify(optimization, null, 2)}
            </pre>
          </div>
        </section>

        {/* Live route table (execution output) */}
        <section>
          <h2 className="text-lg font-semibold text-slate-800 mb-3">Live route table (from execution)</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-slate-600 uppercase">Route</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-slate-600 uppercase">Driver</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-slate-600 uppercase">Status</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-slate-600 uppercase">Duration</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-slate-600 uppercase">Fuel</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-slate-600 uppercase">Delay risk</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-slate-600 uppercase">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {routes.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50">
                    <td className="px-4 py-3 text-slate-900 font-medium">{r.id}</td>
                    <td className="px-4 py-3 text-slate-700">{r.driverName}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          r.status === 'On Time'
                            ? 'bg-emerald-100 text-emerald-800'
                            : r.status === 'Delayed'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {r.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-700">{r.durationMin} min</td>
                    <td className="px-4 py-3 text-slate-700">{r.fuelLiters} L</td>
                    <td className="px-4 py-3 text-slate-700">{r.delayRiskPercent}%</td>
                    <td className="px-4 py-3 text-slate-700">{r.score}/100</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Execution summary */}
        <section className="bg-slate-800 text-white rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Execution summary</h2>
          <p className="text-slate-300 text-sm">
            Output above is produced by application code: <code className="bg-slate-700 px-1 rounded">getRouteExecutionOutput()</code>,{' '}
            <code className="bg-slate-700 px-1 rounded">getDashboardExecutionOutput()</code>, and{' '}
            <code className="bg-slate-700 px-1 rounded">getLastOptimizationOutput()</code>. Metrics and route table are computed at build/render from these functions.
          </p>
        </section>
      </div>
    </main>
  )
}
