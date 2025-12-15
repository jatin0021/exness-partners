import React from 'react';

// --- Icons ---
const ViewGroupIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);
const EditIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
);

const StructureTable = ({ title, subtitle, count, levels }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
        <div className="p-3 sm:p-4 lg:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                    <p className="text-sm text-gray-500 break-all">{subtitle}</p>
                </div>
                <div className="text-sm text-gray-500">{count} structures</div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Level</th>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Structure</th>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">USD / Lot</th>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Spread %</th>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-4 py-2 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {levels.map((level, idx) => (
                            <tr key={idx}>
                                <td className="px-4 py-3 text-sm font-medium text-purple-600">{level.name}</td>
                                <td className="px-4 py-3 text-sm font-medium text-gray-900">{level.structure}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{level.usdlot}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{level.spread}</td>
                                <td className="px-4 py-3">
                                    <span className="inline-flex items-center gap-1.5 rounded-full font-medium bg-green-100 text-green-800 px-3 py-1 text-sm ">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>active
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer ">
                                            <span className="mr-2"><ViewGroupIcon /></span>View Group
                                        </button>
                                        <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer ">
                                            <span className="mr-2"><EditIcon /></span>Edit
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

const CommissionStructures = () => {
    const proLevels = [
        { name: 'Level 1', structure: 'Common Partner', usdlot: '$0.00', spread: '20.00%' },
        { name: 'Level 2', structure: 'Advanced', usdlot: '$0.00', spread: '25.00%' },
        { name: 'Level 3', structure: 'Bronze', usdlot: '$0.00', spread: '33.00%' },
        { name: 'Level 4', structure: 'Silver', usdlot: '$0.00', spread: '35.00%' },
        { name: 'Level 5', structure: 'Gold', usdlot: '$0.00', spread: '37.00%' },
        { name: 'Level 6', structure: 'Brilliant', usdlot: '$0.00', spread: '40.00%' },
    ];

    const startupLevels = [
        { name: 'Level 1', structure: 'Common Partner', usdlot: '$0.00', spread: '20.00%' },
        { name: 'Level 2', structure: 'Advanced', usdlot: '$0.00', spread: '25.00%' },
        { name: 'Level 3', structure: 'Bronze', usdlot: '$0.00', spread: '33.00%' },
        { name: 'Level 4', structure: 'Silver', usdlot: '$0.00', spread: '35.00%' },
        { name: 'Level 5', structure: 'Gold', usdlot: '$0.00', spread: '37.00%' },
        { name: 'Level 6', structure: 'Brilliant', usdlot: '$0.00', spread: '40.00%' },
    ];

    return (
        <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-5 sm:py-6">
            <div className="space-y-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Commission Structures</h1>
                        <p className="text-sm sm:text-base text-gray-600">Overview of all commission structures across all groups</p>
                    </div>
                </div>

                <StructureTable 
                    title="Pro" 
                    subtitle="real\Bbook\Pro\dynamic-2000x-10P" 
                    count="6 structures" 
                    levels={proLevels} 
                />

                <StructureTable 
                    title="Startup" 
                    subtitle="real\Bbook\Startup\dynamic-2000x-20Pips" 
                    count="6 structures" 
                    levels={startupLevels} 
                />
            </div>
        </div>
    );
};

export default CommissionStructures;
