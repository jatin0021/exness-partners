import React from 'react';
import { MessageCircle } from 'lucide-react';

const Legal = () => {
  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto p-6 md:p-10 text-gray-700 relative">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Legal</h1>
        
        <div className="flex flex-col md:flex-row gap-12">
            {/* Left Column: Main Content */}
            <div className="flex-1 space-y-6 text-sm leading-relaxed">
                <p>
                Exness (SC) Ltd is a Securities Dealer registered in Seychelles with registration number 8423606-1 and authorised by the Financial Services Authority (FSA) with licence number SD025. The registered office of Exness (SC) Ltd is at 9A CT House, 2nd floor, Providence, Mahe, Seychelles.
                </p>
                <p>
                Exness B.V. is a Securities Intermediary registered in Curaçao with registration number 148698(0) and authorised by the Central Bank of Curaçao and Sint Maarten (CBCS) with licence number 0003LSI. The registered office of Exness B.V. is at Emancipatie Boulevard Dominico F. “Don” Martina 31, Curaçao.
                </p>
                <p>
                Exness (VG) Ltd is authorised by the Financial Services Commission (FSC) in BVI with registration number 2032226 and investment business licence number SIBA/L/20/1133. The registered office of Exness (VG) Ltd is at Trinity Chambers, P.O. Box 4301, Road town, Tortola, BVI.
                </p>
                <p>
                Exness ZA (PTY) Ltd is authorised by the Financial Sector Conduct Authority (FSCA) in South Africa as a Financial Service Provider (FSP) with registration number 2020/234138/07 and FSP number 51024.
                </p>
                <p>
                Exness (KE) Limited is registered in Kenya with registration number PVT-LRUDJJB and is regulated by the Capital Markets Authority in Kenya as a Non-dealing Online Foreign Exchange Broker under license number 162. The registered office of Exness (KE) Limited is at the Courtyard, 2nd Floor, General Mathenge Road, Westlands, Nairobi.
                </p>
                <p>
                Exness Investment Bank Ltd holds a license to carry on Investment Banking Business from the Labuan Financial Services Authority (LFSA) with licence number 210141BI.
                </p>
                <p>
                The entities above are duly authorized to operate under the Exness brand and trademarks.
                </p>
                <p>
                The information on this website may only be copied with the express written permission of Exness. General Risk Warning: CFDs are leveraged products. Trading in CFDs carries a high level of risk thus may not be appropriate for all investors. The investment value can both increase and decrease and the investors may lose all their invested capital. Under no circumstances shall the Company have any liability to any person or entity for any loss or damage in whole or part caused by, resulting from, or relating to any transactions related to CFDs.
                </p>
                <p>
                Exness complies with the Payment Card Industry Data Security Standard (PCI DSS) to ensure your security and privacy. We conduct regular vulnerability scans and penetration tests in accordance with the PCI DSS requirements for our business model.
                </p>
                <p className="flex items-center gap-1">
                    <span>Email:</span>
                    <a href="mailto:support@exness.com" className="text-blue-600 hover:underline">support@exness.com</a>
                </p>
                <p>© 2008 - 2025 Exness</p>
            </div>

            {/* Right Column: Links */}
            <div className="w-full md:w-64 flex-shrink-0">
                <ul className="flex flex-col gap-4 text-sm text-blue-600">
                    <li><a href="#" className="hover:underline underline decoration-blue-600/30 underline-offset-4">Privacy Policy</a></li>
                    <li><a href="#" className="hover:underline underline decoration-blue-600/30 underline-offset-4">Risk Disclosure</a></li>
                    <li><a href="#" className="hover:underline underline decoration-blue-600/30 underline-offset-4">Preventing Money Laundering</a></li>
                    <li><a href="#" className="hover:underline underline decoration-blue-600/30 underline-offset-4">Become an Introducing Broker</a></li>
                    <li><a href="#" className="hover:underline underline decoration-blue-600/30 underline-offset-4">Security Instructions</a></li>
                    <li><a href="#" className="hover:underline underline decoration-blue-600/30 underline-offset-4">Knowledge Base</a></li>
                </ul>
            </div>
        </div>

        {/* Floating Chat Button */}
        <div className="fixed bottom-8 right-8 z-50">
            <button className="bg-[#FFD900] hover:bg-[#FACC15] text-black w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105">
                <MessageCircle size={28} fill="black" className="text-black" />
            </button>
        </div>
    </div>
  );
};

export default Legal;
