import { useState } from "react";
import { ChevronLeft, ChevronRight, Edit, Trash, Plus } from "lucide-react";

// Mock product data
const mockProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    status: "In Stock",
    inventory: 45,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Running Shoes",
    status: "Low Stock",
    inventory: 5,
    category: "Apparel",
  },
  {
    id: 3,
    name: "Smart Watch",
    status: "Out of Stock",
    inventory: 0,
    category: "Electronics",
  },
  {
    id: 1,
    name: "Wireless Headphones",
    status: "In Stock",
    inventory: 45,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Running Shoes",
    status: "Low Stock",
    inventory: 5,
    category: "Apparel",
  },
  {
    id: 3,
    name: "Smart Watch",
    status: "Out of Stock",
    inventory: 0,
    category: "Electronics",
  },
  {
    id: 1,
    name: "Wireless Headphones",
    status: "In Stock",
    inventory: 45,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Running Shoes",
    status: "Low Stock",
    inventory: 5,
    category: "Apparel",
  },
  {
    id: 3,
    name: "Smart Watch",
    status: "Out of Stock",
    inventory: 0,
    category: "Electronics",
  },
  {
    id: 1,
    name: "Wireless Headphones",
    status: "In Stock",
    inventory: 45,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Running Shoes",
    status: "Low Stock",
    inventory: 5,
    category: "Apparel",
  },
  {
    id: 3,
    name: "Smart Watch",
    status: "Out of Stock",
    inventory: 0,
    category: "Electronics",
  },
  // ... add more mock data
];

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mockProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(mockProducts.length / itemsPerPage);

  return (
    <div className="p-6 bg-[var(--card-bg)]  min-h-screen rounded-lg">
      <div className=" mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[var(--text-color)] font-yantramanav">
            Products
          </h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 font-imprima">
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </button>
        </div>

        {/* Products Table */}
        <div className="rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b bg-[var(--table-header)]">
                <tr>
                  <th className="px-6 py-3 font-imprima text-left text-xs font-medium text-[var(--text-color)] transition-standard uppercase tracking-wider">
                    SN
                  </th>
                  <th className="px-6 py-3 font-imprima text-left text-xs font-medium text-[var(--text-color)] transition-standard uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 font-imprima text-left text-xs font-medium text-[var(--text-color)] transition-standard uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 font-imprima text-left text-xs font-medium text-[var(--text-color)] transition-standard uppercase tracking-wider">
                    Inventory
                  </th>
                  <th className="px-6 py-3 font-imprima text-left text-xs font-medium text-[var(--text-color)] transition-standard uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 font-imprima text-left text-xs font-medium text-[var(--text-color)] transition-standard uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[var(--bg-sidecolor)] divide-y divide-[var(--border-color)]">
                {currentItems.map((product, index) => (
                  <tr
                    key={product.id}
                    className="hover: cursor-pointer hover:bg-[var(--border-color)]"
                  >
                    <td className="px-6 py-4 whitespace-nowrap ">
                      <div className="text-sm font-medium font-muktaVaani text-[var(--text-color)] transition-standard">
                        {index + 1}.
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium font-muktaVaani text-[var(--text-color)] transition-standard">
                        {product.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs font-muktaVaani leading-5 font-semibold rounded-full ${
                          product.status === "In Stock"
                            ? "bg-green-100 text-green-800"
                            : product.status === "Low Stock"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-muktaVaani text-sm text-[var(--text-color)] transition-standard">
                      {product.inventory}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-muktaVaani text-sm text-[var(--text-color)] transition-standard">
                      {product.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-4">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-200 bg-[var(--table-header)] px-4 py-3 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-[var(--text-color)] font-yantramanav">
                    Showing{" "}
                    <span className="font-medium">{indexOfFirstItem + 1}</span>{" "}
                    to{" "}
                    <span className="font-medium">
                      {Math.min(indexOfLastItem, mockProducts.length)}
                    </span>{" "}
                    of{" "}
                    <span className="font-medium">{mockProducts.length}</span>{" "}
                    results
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                    <button
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-[var(--text-color)] transition-standard hover:bg-gray-50 disabled:opacity-50"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                            currentPage === page
                              ? "bg-blue-50 border-blue-500 text-blue-600"
                              : "bg-white border-gray-300 text-[var(--text-color)] transition-standard hover:bg-gray-50"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}
                    <button
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-[var(--text-color)] transition-standard hover:bg-gray-50 disabled:opacity-50"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
