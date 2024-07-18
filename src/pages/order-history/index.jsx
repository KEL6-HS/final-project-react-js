import React from "react";

export default function orderhistory() {
    return (
        <RootLayouts>
            <PageContent label="Order-History">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-8">Order History</h1>
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="border-t border-gray-200">
                            <div className="px-4 py-5 sm:px-6">
                                <h2 className="text-lg leading-6 font-medium text-gray-900">
                                    Order #1
                                </h2>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                    Date: 2024-07-01
                                </p>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                    Total: $120.00
                                </p>
                            </div>
                            <div className="border-t border-gray-200">
                                <div>
                                    <div className="px-4 py-5 bg-gray-50 text-sm font-medium text-gray-500">
                                        Items
                                    </div>
                                    <div className="px-4 py-5 bg-white text-sm text-gray-900">
                                        <ul className="list-disc pl-5">
                                            <li className="mb-4 flex items-center">
                                                <img
                                                    src="https://via.placeholder.com/100"
                                                    alt="Item 1"
                                                    className="w-16 h-16 mr-4"
                                                />
                                                <span>Item 1</span>
                                            </li>
                                            <li className="mb-4 flex items-center">
                                                <img
                                                    src="https://via.placeholder.com/100"
                                                    alt="Item 2"
                                                    className="w-16 h-16 mr-4"
                                                />
                                                <span>Item 2</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-200">
                            <div className="px-4 py-5 sm:px-6">
                                <h2 className="text-lg leading-6 font-medium text-gray-900">
                                    Order #2
                                </h2>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                    Date: 2024-07-05
                                </p>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                    Total: $90.00
                                </p>
                            </div>
                            <div className="border-t border-gray-200">
                                <div>
                                    <div className="px-4 py-5 bg-gray-50 text-sm font-medium text-gray-500">
                                        Items
                                    </div>
                                    <div className="px-4 py-5 bg-white text-sm text-gray-900">
                                        <ul className="list-disc pl-5">
                                            <li className="mb-4 flex items-center">
                                                <img
                                                    src="https://via.placeholder.com/100"
                                                    alt="Item 3"
                                                    className="w-16 h-16 mr-4"
                                                />
                                                <span>Item 3</span>
                                            </li>
                                            <li className="mb-4 flex items-center">
                                                <img
                                                    src="https://via.placeholder.com/100"
                                                    alt="Item 4"
                                                    className="w-16 h-16 mr-4"
                                                />
                                                <span>Item 4</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContent>
        </RootLayouts>
    );
}
