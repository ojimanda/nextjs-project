export default function Users({ dataUsers }) {
  return (
    <div>
      <h1 className="text-center text-4xl pb-4">List Users</h1>
      <ul>
        {dataUsers.map((data) => {
          return (
            <>
              <div className="flex justify-center text-center p-5">
                <div className="max-w-sm rounded overflow-hidden shadow-lg w-full">
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{data.name}</div>
                    <p className="text-gray-700 text-base">{data.email}</p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      <a href={data.website}> {data.website}</a>
                    </span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </ul>
    </div>
  );
}
