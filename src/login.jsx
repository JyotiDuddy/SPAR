

 const Login = () => {
  return (
    
      <div className="min-h-screen bg-white flex flex-col bg-[url('./assets/loginbg.jpg')] bg-no-repeat bg-position-center bg-cover">
      <div className="bg-green-600 text-white text-center py-2 text-sm font-semibold">
        <marquee direction="left" width="100%">
          <i className="w3-text-blue fa fa-star"></i>{" "}
          <strong>SPAR Premier League</strong>{" "}
          <i className="w3-text-blue fa fa-star"></i> <strong>Season -1</strong>{" "}
          <i className="w3-text-blue fa fa-star"></i> Cumulative Scoreboard and
          Intraday Scores will be Reset at 8:00 AM every morning{" "}
          <i className="w3-text-blue fa fa-star"></i> Intraday score is
          Refreshed at every one hour{" "}
          <i className="w3-text-blue fa fa-star"></i> Strategic Timeouts may be
          taken for administrative tasks{" "}
          <i className="w3-text-blue fa fa-star"></i>
        </marquee>
      </div>

      <div className="flex flex-1 justify-center items-center relative">
        <div className="bg-black/70 p-14 rounded-2xl shadow-xl z-10 w-full max-w-lg text-center">
          <div className="flex justify-center mb-6">
            <img src="https://spar.mayanksoftwares.co/img/logo.png" alt="SPAR Hypermarket" className="h-10" />
          </div>

          <form className="space-y-4">
            <div className="text-left">
              <label className="text-white text-sm font-medium">User ID</label>
              <input
                type="text"
                placeholder="User ID"
                className="bg-white w-full mt-1 px-3 py-2 rounded-md border border-gray-400 "
              />
            </div>
            <div className="text-left">
              <label className="text-white text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="bg-white w-full mt-1 px-3 py-2 rounded-md border border-gray-400 "
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition font-medium"
            >
              Sign in
            </button>

            <p className="text-gray-300 text-sm mt-3 cursor-pointer hover:underline">
              forgot password
            </p>
          </form>
        </div>
      </div>
    
    </div>
  )
}
export default Login;