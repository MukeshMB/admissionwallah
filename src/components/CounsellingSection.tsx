import React, { useState } from 'react';
import { ChevronRight, X, User, Phone, CreditCard, Trophy, GraduationCap, Users, ChevronDown } from 'lucide-react';

const CounsellingSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<ExamCategory | null>(null);
    const [selectedExam, setSelectedExam] = useState('');
    const [isExamDropdownOpen, setIsExamDropdownOpen] = useState(false);
    const [formData, setFormData] = useState({
        courseName: '',
        tenth_percentage: '',
        twelfth_percentage: '',
        exam: '',
        rank: '',
        aadhar: '',
        mobile: '',
        studentName: '',
        fatherName: '',
        motherName: ''
    });

    const examCategories = [
        {
            title: "MBBS",
            exams: [
                "Private Colleges",
                "Government Colleges"
            ],
            icon: "🏥",
            color: "bg-red-50 border-red-200"
        },
        {
            title: "Btech",
            exams: [
                "Private Colleges",
                "Government Colleges"
            ],
            icon: "🔧",
            color: "bg-blue-50 border-blue-200"
        },
        {
            title: "MBA",
            exams: [
                "Private Colleges",
                "Government Colleges"
            ],
            icon: "🏢",
            color: "bg-indigo-50 border-indigo-200"
        },
        {
            title: "B.Sc. Nursing",
            exams: [
                "Private Colleges",
                "Government Colleges"
            ],
            icon: "🩺",
            color: "bg-rose-50 border-rose-200"
        },
        {
            title: "BBA",
            exams: [
                "Private Colleges",
                "Government Colleges"
            ],
            icon: "📈",
            color: "bg-orange-50 border-orange-200"
        },
        {
            title: "BCA",
            exams: [
                "Private Colleges",
                "Government Colleges"
            ],
            icon: "💻",
            color: "bg-sky-50 border-sky-200"
        },
        {
            title: "B.Ed",
            exams: [
                "Private Colleges",
                "Government Colleges"
            ],
            icon: "📚",
            color: "bg-teal-50 border-teal-200"
        },
        {
            title: "PGDM",
            exams: [
                "Private Colleges",
                "Government Colleges"
            ],
            icon: "🎓",
            color: "bg-amber-50 border-amber-200"
        },
        {
            title: "B.Pharma / D.Pharma",
            exams: [
                "Private Colleges",
                "Government Colleges"
            ],
            icon: "💊",
            color: "bg-pink-50 border-pink-200"
        },
        {
            title: "MCA",
            exams: [
                "Private Colleges",
                "Government Colleges"
            ],
            icon: "🖥️",
            color: "bg-cyan-50 border-cyan-200"
        },
        {
            title: "Polytechnic",
            exams: [
                "Private Colleges",
                "Government Colleges"
            ],
            icon: "🔧",
            color: "bg-pink-100 border-pink-300"
        },
        {
            title: "B.Sc Agriculture",
            exams: [
                "Private Colleges",
                "Government Colleges"
            ],
            icon: "🌾",
            color: "bg-lime-50 border-lime-200"
        },
        {
            title: "M.Sc Agriculture",
            exams: [
                "Private Colleges",
                "Government Colleges"
            ],
            icon: "🌱",
            color: "bg-emerald-50 border-emerald-200"
        },
        {
            title: "M.Tech",
            exams: [
                "Private Colleges",
                "Government Colleges"
            ],
            icon: "⚙️",
            color: "bg-gray-50 border-gray-200"
        },
        {
            title: "Management",
            exams: [
                "Private Colleges",
                "Government Colleges"
            ],
            icon: "📊",
            color: "bg-green-50 border-green-200"
        },
        {
            title: "Hotel Management",
            exams: [
                "Private Colleges",
                "Government Colleges"
            ],
            icon: "🏨",
            color: "bg-fuchsia-50 border-fuchsia-200"
        },

        {
            title: "Law",
            exams: [
                "Private Colleges",
                "Government Colleges"
            ],
            icon: "⚖️",
            color: "bg-purple-50 border-purple-200"
        },
        {
            title: "Arts & Design",
            exams: [
                "Private Colleges",
                "Government Colleges"
            ],
            icon: "🎨",
            color: "bg-pink-100 border-pink-300"
        },
        {
            title: "Coaching",
            exams: [
                "NEET",
                "JEE Main",
                "JEE Advanced",
                "12th Board",
            ],
            icon: "🏨",
            color: "bg-teal-50 border-teal-200"
        },
    ];

    const allExams = [
        "None", "JEE Main", "JEE Advanced", "NEET UG", "NEET PG", "BITSAT", "VITEEE", "COMEDK", "SRMJEEE",
        "KIITEE", "WBJEE", "AIIMS", "JIPMER", "NEET MDS", "NEET SS", "CAT", "XAT", "GMAT", "MAT",
        "CMAT", "SNAP", "IIFT", "TISSNET", "CLAT", "AILET", "LSAT India", "SLAT", "MHCET Law",
        "KLEE", "AP LAWCET", "NIFT", "NID", "UCEED", "CEED", "SEED", "PEARL CET", "FDDI AIST",
        "ICAR AIEEA", "EAMCET Agriculture", "KCET", "OUAT", "BHU UET", "MCAER CET", "MHT CET",
        "EAMCET", "GUJCET", "OJEE", "UPSEE", "REAP", "KEAM", "COMEDK UGET", "CUET", "DUET",
        "NEST", "KVPY", "NTSE", "JEE Paper 2", "NATA"
    ];

    type ExamCategory = {
        title: string;
        icon: string;
        color: string;
        exams: string[];
    };

    const handleExploreCategory = (category: ExamCategory) => {
        setSelectedCategory(category);
        setFormData(prev => ({ ...prev, courseName: category.title }));
        setIsModalOpen(true);
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleExamSelect = (exam: string) => {
        setSelectedExam(exam);
        setFormData(prev => ({ ...prev, exam: exam }));
        setIsExamDropdownOpen(false);
    };

    const generateWhatsAppMessage = () => {
        const message = `🎓 *COUNSELLING APPLICATION* 🎓

📋 *Course Details:*
• Category: ${formData.courseName || 'Not specified'}
• Entrance Exam: ${formData.exam || 'Not specified'}
${formData.rank ? `• Rank: ${formData.rank}` : ''}

📊 *Academic Performance:*
${formData.tenth_percentage ? `• 10th Percentage: ${formData.tenth_percentage}%` : ''}
${formData.twelfth_percentage ? `• 12th Percentage: ${formData.twelfth_percentage}%` : ''}

👤 *Personal Details:*
${formData.studentName ? `• Student Name: ${formData.studentName}` : ''}
${formData.fatherName ? `• Father's Name: ${formData.fatherName}` : ''}
${formData.motherName ? `• Mother's Name: ${formData.motherName}` : ''}
${formData.mobile ? `• Mobile: ${formData.mobile}` : ''}
${formData.aadhar ? `• Aadhar: ${formData.aadhar}` : ''}

🚀 *Request for Counselling Guidance*
Please help me with admission counselling for the above details.

Thank you! 🙏`;

        return encodeURIComponent(message);
    };

    const handleSubmit = () => {
        const whatsappMessage = generateWhatsAppMessage();
        const whatsappUrl = `https://wa.me/918873204593?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
        setIsModalOpen(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCategory(null);
        setSelectedExam('');
        setIsExamDropdownOpen(false);
        setFormData({
            courseName: '',
            tenth_percentage: '',
            twelfth_percentage: '',
            exam: '',
            rank: '',
            aadhar: '',
            mobile: '',
            studentName: '',
            fatherName: '',
            motherName: ''
        });
    };

    return (
        <>
            <section id="colleges" className="pt-5 pb-10 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Counselling Categories
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {examCategories.map((category, index) => (
                            <div key={index} className={`${category.color} border-2 rounded-xl p-6 hover:shadow-lg transition-shadow`}>
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="text-3xl">{category.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                                </div>
                                <div className="space-y-2 mb-6">
                                    {category.exams.map((exam, examIndex) => (
                                        <div key={examIndex} className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 mr-2 mb-2">
                                            {exam}
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={() => handleExploreCategory(category)}
                                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors cursor-pointer"
                                >
                                    Enquiry
                                    <ChevronRight className="w-4 h-4 ml-1" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Futuristic Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 flex-col h-full overflow-hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={closeModal}
                    />

                    {/* Modal */}
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[95vh] overflow-hidden flex flex-col">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sm:p-6 rounded-t-2xl">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="text-2xl">{selectedCategory?.icon}</div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                                        {selectedCategory?.title} Counselling
                                    </h3>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Scrollable Form Content */}
                        <div className="overflow-y-auto max-h-[calc(95vh-160px)] flex-1">
                            <div className="p-4 sm:p-6 space-y-6 pb-20">
                                {/* Course Selection */}
                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-200">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Selected Course Category
                                    </label>
                                    <div className="flex items-center space-x-2">
                                        <GraduationCap className="w-5 h-5 text-blue-600" />
                                        <span className="text-lg font-medium text-gray-900">
                                            {selectedCategory?.title}
                                        </span>
                                    </div>
                                </div>

                                {/* Academic Performance & Exam Selection */}
                                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl space-y-4">
                                    <h4 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                                        <Trophy className="w-5 h-5 text-yellow-500" />
                                        <span>Academic Details</span>
                                    </h4>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-semibold text-gray-700">
                                                10th Percentage
                                            </label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                min="0"
                                                max="100"
                                                value={formData.tenth_percentage}
                                                onChange={(e) => handleInputChange('tenth_percentage', e.target.value)}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white"
                                                placeholder="Enter 10th %"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-semibold text-gray-700">
                                                12th Percentage
                                            </label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                min="0"
                                                max="100"
                                                value={formData.twelfth_percentage}
                                                onChange={(e) => handleInputChange('twelfth_percentage', e.target.value)}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white"
                                                placeholder="Enter 12th %"
                                            />
                                        </div>
                                    </div>

                                    {/* Exam Dropdown */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-gray-700">
                                            Select Entrance Exam
                                        </label>
                                        <div className="relative">
                                            <button
                                                type="button"
                                                onClick={() => setIsExamDropdownOpen(!isExamDropdownOpen)}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-left flex items-center justify-between bg-white"
                                            >
                                                <span className={selectedExam ? 'text-gray-900' : 'text-gray-500'}>
                                                    {selectedExam || 'Select an exam'}
                                                </span>
                                                <ChevronDown className={`w-5 h-5 transition-transform ${isExamDropdownOpen ? 'rotate-180' : ''}`} />
                                            </button>

                                            {isExamDropdownOpen && (
                                                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                                    {allExams.map((exam, index) => (
                                                        <button
                                                            key={index}
                                                            type="button"
                                                            onClick={() => handleExamSelect(exam)}
                                                            className="w-full text-left p-3 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0 text-gray-900"
                                                        >
                                                            {exam}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Rank Field */}
                                    {selectedExam && (selectedExam !== "None") && (
                                        <div className="space-y-2">
                                            <label className="block text-sm font-semibold text-gray-700 flex items-center space-x-2">
                                                <Trophy className="w-4 h-4 text-yellow-500" />
                                                <span>{selectedExam} Rank</span>
                                            </label>
                                            <input
                                                type="number"
                                                min="1"
                                                value={formData.rank}
                                                onChange={(e) => handleInputChange('rank', e.target.value)}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white"
                                                placeholder="Enter your rank"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Personal Details */}
                                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl space-y-4">
                                    <h4 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                                        <User className="w-5 h-5 text-blue-600" />
                                        <span>Personal Details</span>
                                    </h4>

                                    <div className="space-y-4">
                                        {/* Student Name - Full Width */}
                                        <div className="space-y-2">
                                            <label className="block text-sm font-semibold text-gray-700">
                                                Student Name
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.studentName}
                                                onChange={(e) => handleInputChange('studentName', e.target.value)}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white"
                                                placeholder="Enter student name"
                                            />
                                        </div>

                                        {/* Father's and Mother's Name - Side by Side */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700 flex items-center space-x-2">
                                                    <Users className="w-4 h-4" />
                                                    <span>Father's Name</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.fatherName}
                                                    onChange={(e) => handleInputChange('fatherName', e.target.value)}
                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white"
                                                    placeholder="Enter father's name"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700 flex items-center space-x-2">
                                                    <Users className="w-4 h-4" />
                                                    <span>Mother's Name</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.motherName}
                                                    onChange={(e) => handleInputChange('motherName', e.target.value)}
                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white"
                                                    placeholder="Enter mother's name"
                                                />
                                            </div>
                                        </div>

                                        {/* Mobile and Aadhar - Side by Side */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700 flex items-center space-x-2">
                                                    <Phone className="w-4 h-4 text-gray-700" />
                                                    <span>Mobile Number</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    pattern="[0-9]{10}"
                                                    value={formData.mobile}
                                                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white placeholder-gray-500"
                                                    placeholder="Enter 10-digit mobile number"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700 flex items-center space-x-2">
                                                    <CreditCard className="w-4 h-4 text-gray-700" />
                                                    <span>Aadhar Number</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    pattern="[0-9]{12}"
                                                    value={formData.aadhar}
                                                    onChange={(e) => handleInputChange('aadhar', e.target.value)}
                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white placeholder-gray-500"
                                                    placeholder="Enter 12-digit Aadhar number"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fixed Submit Button */}
                        <div className="flex-shrink-0 border-t border-gray-200 bg-white p-4 sm:p-6">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                            >
                                📱 Send WhatsApp Message
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CounsellingSection;