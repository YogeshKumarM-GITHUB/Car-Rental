const ManageCars = () => {
    return (
        <div>
            <div>
                <div className="px-6 py-8">
                    <h1 className="text-3xl font-bold mb-2">Manage Cars</h1>
                    <p className="text-blue-600 font-medium mb-6">
                        View all listed cars, update their details, or remove them from the booking platform.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto border border-gray-200 rounded-lg overflow-hidden">
                            <thead className="bg-gray-100 text-left text-gray-700 uppercase text-sm font-semibold">
                                <tr>
                                    <th className="px-6 py-3">Car</th>
                                    <th className="px-6 py-3">Category</th>
                                    <th className="px-6 py-3">Price</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 text-sm">
                                {/* Example row */}
                                <tr className="hover:bg-gray-50 border-t">
                                    <td className="px-6 py-4 font-medium">Toyota Camry</td>
                                    <td className="px-6 py-4">Sedan</td>
                                    <td className="px-6 py-4">$45/day</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">Available</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="text-blue-600 hover:underline text-sm mr-4">Edit</button>
                                        <button className="text-red-500 hover:underline text-sm">Delete</button>
                                    </td>
                                </tr>
                                {/* Repeat rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ManageCars;