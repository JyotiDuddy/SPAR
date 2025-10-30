

const Dashboard = () => {
  return (
  <div className="min-h-screen text-gray-900 font-sans bg-[url('./assets/dashbordbg.jpg')] bg-no-repeat bg-position-center bg-cover">
      {/* Top Banner */}
      <div className="bg-green-600  text-white text-sm py-1 px-2 flex justify-between items-center">
        <marquee direction="left" className="w-full">
          <i className="fa fa-star text-blue-400 mx-1" />
          <strong>SPAR Premier League</strong>
          <i className="fa fa-star text-blue-400 mx-1" />
          <strong>Season - 1</strong>
          <i className="fa fa-star text-blue-400 mx-1" />
          Cumulative Scoreboard and Intraday Scores will be Reset at 8:00 AM
          every morning
          <i className="fa fa-star text-blue-400 mx-1" />
          Intraday score is Refreshed every one hour
          <i className="fa fa-star text-blue-400 mx-1" />
          Strategic Timeouts may be taken for administrative tasks
          <i className="fa fa-star text-blue-400 mx-1" />
        </marquee>

        <span className="text-xs font-semibold pr-4">
          Last Sales:{" "}
          <span className="text-yellow-300">10/30/25 7:30:01 AM</span>
        </span>
      </div>

      {/* Header with Menu */}
      <div className=" flex justify-between items-center p-4 ">
        <img src="https://spar.mayanksoftwares.co/img/logo.png" alt="SPAR" className="h-8" />
        <div className="flex flex-wrap gap-3 text-sm font-medium">
          <button className=" border-1  border-white text-white px-4 py-1 rounded-2xl">
            Scoreboard
          </button>
          <button className=" border-1  border-white text-white px-4 py-1 rounded-2xl">
            How it works
          </button>
          <button className=" border-1  border-white text-white px-4 py-1 rounded-2xl">
            Prize
          </button>
          <button className=" border-1  border-white text-white px-4 py-1 rounded-2xl">
            Accountable Person
          </button>
          <button className=" border-1  border-white text-white px-4 py-1 rounded-2xl">
            Target vs Achievement
          </button>
          <button className=" border-1  border-white text-white px-4 py-1 rounded-2xl">
            Others
          </button>
          <button className=" border-1  border-white text-white px-4 py-1 rounded-2xl">
            Logout
          </button>
        </div>
      </div>

      {/* Regions */}
      <div className="flex flex-wrap justify-between gap-4 my-4 px-4">
        {[
          { name: "ALL", color: "bg-blue-500", teams: 24 },
          { name: "BLR", color: "bg-sky-600", teams: 7 },
          { name: "NCR&TG", color: "bg-green-500", teams: 7 },
          { name: "ROK", color: "bg-yellow-500", teams: 4 },
          { name: "TN", color: "bg-gray-500", teams: 6 },
        ].map((region, i) => (
          <div
            key={i}
            className={`${region.color} rounded-xl text-white px-6 py-4 w-54 shadow-lg`}
          >
            <h3 className="font-bold text-sm">REGION</h3>
            <p className="text-lg font-semibold">{region.name}</p>
            <p className="text-sm mt-1">Teams ({region.teams})</p>
          </div>
        ))}
      </div>

      {/* Notification & Leaderboards (Today) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {/* Notification */}
        <div className="bg-white rounded-lg">
          <h2 className="bg-red-600 py-2 text-white text-lg font-semibold mb-2 text-center rounded-t-lg">
            Notification
          </h2>
          <div className="relative h-32 overflow-hidden">
            <div className="animate-scroll-up absolute w-full text-sm text-gray-700 space-y-3 p-4">
              <p>
                <strong>Time: 7:30 AM</strong>
                <br />
                MTD: 1st position Team <strong>Mangalore Forum</strong> - 4352
                runs
              </p>
              <p>
                <strong>Time: 7:30 AM</strong>
                <br />
                MTD: 2nd position Team <strong>Vegas</strong> - 3920 runs
              </p>
              <p>
                <strong>Time: 8:00 AM</strong>
                <br />
                MTD: 3rd position Team <strong>Dream XI</strong> - 3560 runs
              </p>
              <p>
                <strong>Time: 8:30 AM</strong>
                <br />
                MTD: 4th position Team <strong>Warriors</strong> - 3100 runs
              </p>
            </div>
          </div>
        </div>

        {/* Today's Leaderboard - Store */}
        <div className="bg-white rounded-lg shadow ">
          <h2 className="bg-green-600 text-white py-2 text-lg font-semibold mb-2 text-center rounded-t-lg">
            Today's Leader board - Store
          </h2>
          <p className="text-gray-600  p-4">Team is Gearing up for the day.</p>
        </div>

        {/* Today's Leaderboard - Category */}
        <div className="bg-white rounded-lg  ">
          <h2 className="bg-red-600 py-2 text-white text-lg font-semibold mb-2 text-center rounded-t-lg">
            Today's Leader board - Category
          </h2>
          <p className="text-gray-600  p-4">Team is Gearing up for the day.</p>
        </div>
      </div>

      {/* Yesterday Leaderboards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 px-4">
        {/* Store */}
        <div className="bg-white rounded-lg  ">
          <h2 className="bg-red-600 py-2 text-white text-lg font-semibold mb-2 text-center rounded-t-lg">
            Yesterday Leader board - Store
          </h2>
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Rank</th>
                <th className="p-2 border">Team</th>
                <th className="p-2 border">Total Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">1</td>
                <td className="p-2 border">
                  Philomena.Albuquerque (Mangalore Forum)
                </td>
                <td className="p-2 border">341</td>
              </tr>
              <tr>
                <td className="p-2 border">2</td>
                <td className="p-2 border">
                  Basavaraj.Gouda (BEARY’S Shimoga)
                </td>
                <td className="p-2 border">287</td>
              </tr>
              <tr>
                <td className="p-2 border">3</td>
                <td className="p-2 border">
                  Channappa.BK (Malleswaram Mantri)
                </td>
                <td className="p-2 border">263</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Category */}
        <div className="bg-white rounded-lg  ">
          <h2 className="bg-green-600 text-white py-2 text-lg font-semibold mb-2 text-center rounded-t-lg">
            Yesterday Leader board - Category
          </h2>
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Rank</th>
                <th className="p-2 border">Category</th>
                <th className="p-2 border">Total Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">1</td>
                <td className="p-2 border">LIQUOR AND TOBACCO</td>
                <td className="p-2 border">3461</td>
              </tr>
              <tr>
                <td className="p-2 border">2</td>
                <td className="p-2 border">APPARELS</td>
                <td className="p-2 border">215</td>
              </tr>
              <tr>
                <td className="p-2 border">3</td>
                <td className="p-2 border">DAIRY AND FROZEN</td>
                <td className="p-2 border">167</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Weekly Leaderboards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 px-4 pb-10">
        {/* Store */}
        <div className="bg-white rounded-lg  ">
          <h2 className="bg-red-600 py-2 text-white text-lg font-semibold mb-2 text-center rounded-t-lg">
            Weekly Leader board - Store
          </h2>
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Rank</th>
                <th className="p-2 border">Team</th>
                <th className="p-2 border">Total Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">1</td>
                <td className="p-2 border">
                  Philomena.Albuquerque (Mangalore Forum)
                </td>
                <td className="p-2 border">341</td>
              </tr>
              <tr>
                <td className="p-2 border">2</td>
                <td className="p-2 border">
                  Basavaraj.Gouda (BEARY’S Shimoga)
                </td>
                <td className="p-2 border">287</td>
              </tr>
              <tr>
                <td className="p-2 border">3</td>
                <td className="p-2 border">
                  Channappa.BK (Malleswaram Mantri)
                </td>
                <td className="p-2 border">263</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Category */}
        <div className="bg-white rounded-lg  ">
          <h2 className="bg-green-600 text-white py-2 text-lg font-semibold mb-2 text-center rounded-t-lg">
            Weekly Leader board - Category
          </h2>
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Rank</th>
                <th className="p-2 border">Category</th>
                <th className="p-2 border">Total Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">1</td>
                <td className="p-2 border">LIQUOR AND TOBACCO</td>
                <td className="p-2 border">3461</td>
              </tr>
              <tr>
                <td className="p-2 border">2</td>
                <td className="p-2 border">APPARELS</td>
                <td className="p-2 border">215</td>
              </tr>
              <tr>
                <td className="p-2 border">3</td>
                <td className="p-2 border">DAIRY AND FROZEN</td>
                <td className="p-2 border">167</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard