import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
    const [step, setStep] = useState(1);
    const [data, setData] = useState({
        name: "",
        studentId: "",
        email: "",
        phone: "",
        id: "",
        password: "",
        confirmPassword: "",
        terms: false,
        privacy: false,
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData({
            ...data,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const validateStep = () => {
        const newErrors = {};
        if (step === 1) {
            if (!data.terms) newErrors.terms = "서비스 약관에 동의해야 합니다.";
            if (!data.privacy) newErrors.privacy = "개인 정보 수집 및 이용에 동의해야 합니다.";
        } else if (step === 2) {
            if (!data.name) newErrors.name = "이름을 입력해주세요.";
            if (!data.studentId) newErrors.studentId = "학번을 입력해주세요.";
            if (!data.email) newErrors.email = "이메일을 입력해주세요.";
            if (!data.phone) newErrors.phone = "전화번호를 입력해주세요.";
            if (!data.id) newErrors.id = "아이디를 입력해주세요.";
            if (!data.password) newErrors.password = "비밀번호를 입력해주세요.";
            if (!data.confirmPassword) newErrors.confirmPassword = "비밀번호를 다시 입력해주세요.";
            else if (data.password !== data.confirmPassword) newErrors.confirmPassword = "비밀번호가 다릅니다.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (validateStep()) setStep(step + 1);
    };

    const prevStep = () => setStep(step - 1);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
                {/* 🔹 진행 인디케이터 */}
                <div className="flex justify-center space-x-2 mb-6">
                    {[1, 2, 3].map((num) => (
                        <div
                            key={num}
                            className={`h-3 w-3 rounded-full ${step == num ? "bg-red-500" : "bg-gray-500"
                                }`}
                        ></div>
                    ))}
                </div>

                <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

                {/* Step 1: 약관 동의 */}
                {step === 1 && (
                    <div>
                        <h3 className="text-lg font-semibold mb-4">약관 동의</h3>
                        <div className="mb-4">
                            <label className="block mb-1">서비스 약관 동의</label>
                            <textarea readOnly value="약관 내용" className="w-full p-2 text-black rounded-md bg-gray-100" />
                            <div className="flex items-center mt-2">
                                <input type="checkbox" name="terms" onChange={handleChange} className="mr-2" />
                                <span>동의합니다.</span>
                            </div>
                            {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1">개인 정보 수집 및 이용 동의</label>
                            <textarea readOnly value="개인 정보 수집 및 이용 동의 내용" className="w-full p-2 text-black rounded-md bg-gray-100" />
                            <div className="flex items-center mt-2">
                                <input type="checkbox" name="privacy" onChange={handleChange} className="mr-2" />
                                <span>동의합니다.</span>
                            </div>
                            {errors.privacy && <p className="text-red-500 text-sm mt-1">{errors.privacy}</p>}
                        </div>

                        <button onClick={nextStep} className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md">
                            Next
                        </button>
                    </div>
                )}

                {/* Step 2: 정보 입력 */}
                {step === 2 && (
                    <div>
                        <h3 className="text-lg font-semibold mb-4">정보 입력</h3>
                        {["name", "studentId", "email", "phone", "id", "password", "confirmPassword"].map((field, index) => (
                            <div key={index} className="mb-4">
                                <label htmlFor={field} className="block capitalize">{field.replace(/([A-Z])/g, " $1")}</label>
                                <input
                                    type={field.includes("password") ? "password" : "text"}
                                    id={field}
                                    name={field}
                                    value={data[field]}
                                    onChange={handleChange}
                                    className="w-full p-2 text-black rounded-md bg-gray-100"
                                    required
                                />
                                {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                            </div>
                        ))}

                        <div className="flex justify-between mt-4">
                            <button onClick={prevStep} className="bg-gray-500 text-white py-2 px-4 rounded-md">
                                이전
                            </button>
                            <button onClick={nextStep} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: 가입 완료 */}
                {step === 3 && (
                    <div className="text-center">
                        <h3 className="text-lg font-semibold mb-2">가입 완료</h3>
                        <p className="text-gray-300 mb-4">가입이 완료되었습니다. 로그인하여 서비스를 이용하세요.</p>
                        <Link to="/Login">
                            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
                                Done
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SignUp;
