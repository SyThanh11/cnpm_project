const Table_row = [
  {
    "Tên tài liệu": "Giải tích 1",
    "Ngày và giờ": "12/1/2023 6:49pm",
    "Loại giấy": "A4",
    "Tên máy in": "H6",
    "Trạng thái": "Hoàn thành"
  },
  {
    "Tên tài liệu": "Giải tích 1",
    "Ngày và giờ": "12/1/2023 6:49pm",
    "Loại giấy": "A4",
    "Tên máy in": "H6",
    "Trạng thái": "Hoàn thành"
  },
  {
    "Tên tài liệu": "Giải tích 1",
    "Ngày và giờ": "12/1/2023 6:49pm",
    "Loại giấy": "A4",
    "Tên máy in": "H6",
    "Trạng thái": "Hoàn thành"
  },
  {
    "Tên tài liệu": "Giải tích 1",
    "Ngày và giờ": "12/1/2023 6:49pm",
    "Loại giấy": "A4",
    "Tên máy in": "H6",
    "Trạng thái": "Hoàn thành"
  },
  {
    "Tên tài liệu": "Giải tích 1",
    "Ngày và giờ": "12/1/2023 6:49pm",
    "Loại giấy": "A4",
    "Tên máy in": "H6",
    "Trạng thái": "Hoàn thành"
  },
  {
    "Tên tài liệu": "Giải tích 1",
    "Ngày và giờ": "12/1/2023 6:49pm",
    "Loại giấy": "A4",
    "Tên máy in": "H6",
    "Trạng thái": "Hoàn thành"
  },
  {
    "Tên tài liệu": "Giải tích 1",
    "Ngày và giờ": "12/1/2023 6:49pm",
    "Loại giấy": "A4",
    "Tên máy in": "H6",
    "Trạng thái": "Hoàn thành"
  }
]
export const HistoryPrintTemplate = () => {
  return (
    <div className="PrintOneTemplate grid grid-cols-2">
        <div className="left col-span-2 ml-[50px] py-10 mr-[50px]">
            <h1 className="text-[#009EE2] font-bold text-36 pb-20 pt-10">Lịch sử in ấn</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-blue-400 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" className="px-6 py-3 w-1/6 text-white text-center">
                              Số thứ tự
                          </th>
                          <th scope="col" className="px-6 py-3 w-1/6 text-white text-center">
                              Tên tài liệu
                          </th>
                          <th scope="col" className="px-6 py-3 w-1/6 text-white text-center">
                              Ngày và giờ
                          </th>
                          <th scope="col" className="px-6 py-3 w-1/6 text-white text-center">
                              Loại giấy
                          </th>
                          <th scope="col" className="px-6 py-3 w-1/6 text-white text-center">
                              Tên máy in
                          </th>
                          <th scope="col" className="px-6 py-3 w-1/6 text-white text-center">
                              Trạng thái
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                    {Table_row.map((items, index) => (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 text-gray-900 text-center">
                            {index + 1}
                        </th>
                        <td className="px-6 py-4 text-center">
                            {items["Tên tài liệu"]}
                        </td>
                        <td className="px-6 py-4 text-center">
                            {items["Ngày và giờ"]}
                        </td>
                        <td className="px-6 py-4 text-center">
                            {items["Loại giấy"]}
                        </td>
                        <td className="px-6 py-4 text-center">
                            {items["Tên máy in"]}
                        </td>
                        <td className="px-6 py-4 text-center">
                            {items["Trạng thái"]}
                        </td>
                    </tr>
                    ))}
                  </tbody>
              </table>
          </div>
        </div>
    </div>
  )
}

export default HistoryPrintTemplate