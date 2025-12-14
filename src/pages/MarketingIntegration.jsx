import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Info, Plus, Trash2, X, ChevronDown, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MarketingIntegration = () => {
  const navigate = useNavigate();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [activeTab, setActiveTab] = useState('generate');
  
  // State for parameters
  const [parameters, setParameters] = useState([
    { token: '', parameter: '' }
  ]);
  
  const addParameter = () => {
    setParameters([...parameters, { token: '', parameter: '' }]);
  };
  
  const removeParameter = (index) => {
    const newParams = [...parameters];
    newParams.splice(index, 1);
    setParameters(newParams);
  };
  
  const updateParameter = (index, field, value) => {
    const newParams = [...parameters];
    newParams[index][field] = value;
    setParameters(newParams);
  };

  const TipsSection = () => (
    <div className="mt-8 pt-6 border-t border-gray-100">
      <h4 className="text-[16px] font-bold text-gray-900 mb-4">Tips</h4>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-start gap-2 mb-2">
            <ArrowRight className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
            <span className="text-[13px] text-gray-500">
              Use <span className="text-teal-600 font-medium">{'{aff_value}'}</span> token as a preset of event's value
            </span>
          </div>
          <div className="bg-gray-50 text-gray-500 text-[12px] p-2 rounded break-all font-mono ml-6">
            https://yourdomain.com?eventtype=deposit&amount=<span className="text-teal-600">{'{aff_value}'}</span>
          </div>
        </div>

        <div>
          <div className="flex items-start gap-2 mb-2">
            <ArrowRight className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
            <span className="text-[13px] text-gray-500">
              All the parameters from your offer URL (click URL)
            </span>
          </div>
          <div className="bg-gray-50 text-gray-500 text-[12px] p-2 rounded break-all font-mono ml-6 mb-2">
            https://www.yourdomain.com?<span className="text-teal-600">cid</span>={'{45784}'}&<span className="text-teal-600">utm_source</span>=facebook
          </div>
          <div className="ml-6 mb-2">
             <span className="text-[13px] text-gray-500">...may be used as tokens in the Postback URL</span>
          </div>
           <div className="bg-gray-50 text-gray-500 text-[12px] p-2 rounded break-all font-mono ml-6">
            https://www.yourdomain.com?clickid=<span className="text-teal-600">{'{cid}'}</span>&source=<span className="text-teal-600">{'{utm_source}'}</span>
          </div>
        </div>
      </div>
    </div>
  );

  if (showCreateForm) {
    return (
      <div className="flex flex-col items-center p-6 bg-gray-50/50 min-h-full">
         <div className="w-full max-w-[580px]">
          {/* Back Button */}
          <button 
            onClick={() => setShowCreateForm(false)} 
            className="flex items-center text-[14px] text-gray-700 hover:text-gray-900 transition-colors mb-6 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" strokeWidth={2.5} />
            Back
          </button>

          {/* Form Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {/* Header */}
            <div className="p-8 pb-0">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-[20px] font-bold text-gray-900">Create postbacks</h1>
                    <a href="https://ex.guide/4foe4Pe" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] text-[14px] hover:underline font-normal cursor-pointer">
                        Tutorial
                    </a>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-200 mb-0">
                    <button
                        onClick={() => setActiveTab('generate')}
                        className={`pb-3 px-1 mr-8 text-[14px] font-medium transition-colors relative ${
                        activeTab === 'generate' 
                            ? 'text-gray-900' 
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Generate postbacks
                        {activeTab === 'generate' && (
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black"></div>
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('manual')}
                        className={`pb-3 px-1 text-[14px] font-medium transition-colors relative ${
                        activeTab === 'manual' 
                            ? 'text-gray-900' 
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Manual setup
                         {activeTab === 'manual' && (
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black"></div>
                        )}
                    </button>
                </div>
            </div>

            <div className="p-8 pt-6">
                {/* Click URL Section */}
                <div className="bg-[#f7f9fa] p-5 rounded-lg mb-8">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-[14px] font-bold text-gray-900">Click URL</span>
                        <Info className="w-4 h-4 text-gray-400 cursor-help" />
                    </div>
                    <p className="text-[13px] text-gray-500 mb-4">
                        You can place your Click URL here to simplify a postback setup.
                    </p>
                    <input 
                        type="text" 
                        placeholder="Click URL" 
                        className="w-full h-12 px-4 rounded border border-gray-300 focus:border-blue-500 focus:outline-none text-[14px]"
                    />
                </div>

                {/* Postback Form Section */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                         <span className="text-[14px] font-bold text-gray-900">Postback</span>
                         <button className="text-gray-400 hover:text-gray-600"><X className="w-4 h-4" /></button>
                    </div>

                    <div className="space-y-6">
                         {/* Event Type */}
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <label className="text-[12px] text-gray-500">Event type</label>
                                <Info className="w-3.5 h-3.5 text-gray-400" />
                            </div>
                            <div className="relative">
                                <select className="w-full h-12 px-4 rounded border border-gray-300 focus:border-blue-500 focus:outline-none text-[14px] appearance-none bg-white">
                                    <option></option>
                                    <option value="registration">Registration</option>
                                    <option value="deposit">First Deposit</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                            </div>
                        </div>

                         {/* Postback URL */}
                        <div>
                            <label className="text-[12px] text-gray-500 mb-2 block">Postback URL</label>
                            <input 
                                type="text"
                                className="w-full h-12 px-4 rounded border border-gray-300 focus:border-blue-500 focus:outline-none text-[14px]"
                            />
                        </div>

                        {/* Parameters */}
                        <div className="pt-2">
                             <div className="flex items-center gap-2 mb-4">
                                <span className="text-[14px] font-bold text-gray-900">Parameters</span>
                                <Info className="w-4 h-4 text-gray-400" />
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex gap-4 text-[12px] text-gray-500 mb-[-10px]">
                                    <div className="flex-1">Token</div>
                                    <div className="w-[20px]"></div>
                                    <div className="flex-1">Parameter</div>
                                    <div className="w-[20px]"></div>
                                </div>

                                {parameters.map((param, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="flex-1">
                                            <input 
                                                type="text"
                                                value={param.token}
                                                onChange={(e) => updateParameter(index, 'token', e.target.value)}
                                                className="w-full h-10 px-3 rounded border border-gray-300 focus:border-blue-500 focus:outline-none text-[14px]"
                                            />
                                        </div>
                                        <span className="text-gray-400">=</span>
                                        <div className="flex-1">
                                            <input 
                                                type="text"
                                                value={param.parameter}
                                                onChange={(e) => updateParameter(index, 'parameter', e.target.value)}
                                                className="w-full h-10 px-3 rounded border border-gray-300 focus:border-blue-500 focus:outline-none text-[14px]"
                                            />
                                        </div>
                                        <button 
                                            onClick={() => removeParameter(index)}
                                            className="p-2 text-gray-400 hover:text-gray-600"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <button 
                                onClick={addParameter}
                                className="flex items-center text-[#2563eb] text-[14px] font-medium hover:underline mt-4"
                            >
                                <Plus className="w-4 h-4 mr-1" />
                                Add parameter
                            </button>
                        </div>
                    </div>
                </div>

                 {/* Divider with central plus */}
                <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <button className="bg-white border text-gray-300 rounded-full p-1 cursor-default">
                             <Plus className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <TipsSection />

                {/* Footer Buttons */}
                <div className="flex gap-4 mt-8 pt-4">
                    <button 
                        onClick={() => setShowCreateForm(false)}
                        className="flex-1 h-12 rounded border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button className="flex-1 h-12 rounded bg-[#ffdd2d] hover:bg-[#ffcd2d] text-black font-medium transition-colors">
                        Save
                    </button>
                </div>
            </div>
          </div>
         </div>
      </div>
    );
  }

  // Welcome / Empty State
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50/50 min-h-full">
      <div className="w-full max-w-[580px]">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-[14px] text-gray-700 hover:text-gray-900 transition-colors mb-6 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" strokeWidth={2.5} />
          Back
        </button>

        {/* Content Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 min-h-[300px]">
           <h1 className="text-[20px] font-bold text-gray-900 mb-2">My postbacks</h1>
          
          <p className="text-[14px] text-gray-600 leading-relaxed mb-4 max-w-[480px]">
            You haven't created any postback URLs yet. Go to the Create Postbacks section to generate your first URL.
          </p>

          <a href="#" className="inline-flex items-center text-[#2563eb] text-[14px] font-normal hover:underline mb-8">
            Learn More
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>

          <div>
            <button 
                onClick={() => setShowCreateForm(true)}
                className="bg-[#ffdd2d] hover:bg-[#ffcd2d] text-black font-medium text-[14px] px-6 py-3 rounded-md transition-colors w-full sm:w-auto min-w-[200px]"
            >
              Create postbacks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingIntegration;
