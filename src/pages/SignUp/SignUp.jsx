import { useState } from 'react';
import { Link } from 'react-router-dom';


function SignUp() {

    const [step, setStep] = useState(1);
    const [data, setData] = useState({
        name: '',
        studentId: '',
        email: '',
        phone: '',
        id: '',
        password: '',
        confirmPassword: '',
        terms: false,  // 초기값 설정
        privacy: false,
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {//e:이벤트 헨들러로 변화하는 값을 담는 역할할
        const { name, value } = e.target; //e.target.name과 e.target.value를 개별 변수로 쉽게 가져오게 하려는 코드
        setData({
            ...data,//기존의 data를 모두 복사하는 문법-변경되는 특정 값을 업데이트할 수 있음 shallow copy는 아니다
            [name]: value,//name속성에 해당하는 값을 value로 변경
        });
        //step1에서 체크박스에 표시하면 terms랑 privacy속성이 추가된다 - e.target덕분에 동적으로 추가할 수 있다
        //이후 validateStep함수에서 !data.terms를 조사할 시 체크박스 안눌렀으면 terms가 undefined되기에 오류 메세지를 출력할 수 있게 하는거거
    }

    const validateStep = () => {
        const newErrors = {}; //useState에서는 직접 Errors를 수정할 수 없기에 newErrors를 통해 Error가 있는지를 받는다
        //newErrors는 입력값이 올바른지 체크하는 임시 객체인 것
        if (step === 1) {
            if (!data.terms) newErrors.terms = "서비스 약관에 동의해야 합니다.";
            if (!data.privacy) newErrors.privacy = "개인 정보 수집 및 이용에 동의해야 합니다.";
        }
        else if (step === 2) {
            if (!data.name) newErrors.name = "이름을 입력해주세요.";
            if (!data.studentId) newErrors.studentId = "학번을 입력해주세요.";
            if (!data.email) newErrors.email = "이메일을 입력해주세요.";
            if (!data.phone) newErrors.phone = "전화번호를 입력해주세요.";
            if (!data.id) newErrors.id = "아이디를 입력해주세요.";
            if (!data.password) newErrors.password = "비밀번호를 입력해주세요.";
            if (!data.confirmPassword) newErrors.confirmPassword = "비밀번호를 다시한번 입력해주세요.";
            else if (data.password !== data.confirmPassword) newErrors.confirmPassword = "비밀번호가 다릅니다. 다시 입력해주세요";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;//nextStep에서 여기서의 반환값을 통해 다음단계로 넘어갈지 여부 판단하기 위해 반환을 해야함
        //key: 객체는 키:벨류 형식으로 데이터를 저장한다고 함 여기서의 key인것
        //Object.keys는 모든 키를 배열 형태로 가져오는 함수-파이썬 생각하면 될듯
        //Object.keys():저 괄호는 어떤 객체의 키를 가져올지를 지정할 수 있게 한다
        //Object.keys.length는 모든 키 배열의 길이를 알려줌 -이 값이 0이면 true를 반환하고 아니면 false를 반환한다
        //오브젝트의 키 배열의 길이가 0인걸 확인하는 이유 key가 오류이기에 오류가 0개인지를 확인한 것

    }

    const nextStep = () => {
        if (validateStep()) setStep(step + 1);
        //validateStep의 반환값이 true이면 지금 step에 +1을 해주라~
    }
    const prevStep = () => setStep(step - 1);
    const handleSubmit = (e) => {
        e.preventDefault();
        // form 제출 처리
        if (validateStep()) {
            // form을 제출하거나 다른 행동을 수행
            setIsSubmitting(true);
            // 실제 제출 후 isSubmitting을 false로 변경
        }
    }

    <form onSubmit={handleSubmit}>
        <button type="submit" disabled={isSubmitting}>다음</button>
    </form>

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold text-center mb-4">회원가입</h2>
            <div className="flex justify-center mb-6"> 
               <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>1</div>
                {/*
                $:삼항연산자-step이 1이상인가 -true)active 클래스를 추가 false)""
                `:백틱-문자열리터럴;문자열 안에 변수를 쉽게 넣을 수 있게 도와줌&문자열을 동적으로 만들 수 있음
                 */}
                <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>2</div>
                <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>3</div>
            </div>
            <div className="signup-content">
                {step === 1 && (
                     <div>
                        <h3 className="text-lg font-semibold mb-4">약관 동의</h3>
                        <div className="mb-4">
                            <label>서비스 약관 동의</label>
                            <textarea readOnly value="약관 내용" />
                            <input type="checkbox" name="terms" onChange={handleChange} /> 동의합니다.
                            {errors.terms && <p className="error">{errors.terms}</p>}
                        </div>
                        <div className="mb-4">
                            <label>개인 정보 수집 및 이용 동의</label>
                            <textarea readOnly value="개인 정보 수집 및 이용 동의 내용" />
                            <input type="checkbox" name="privacy" onChange={handleChange} /> 동의합니다.
                            {errors.privacy && <p className="error">{errors.privacy}</p>}
                        </div>
                        <button type="button" onClick={nextStep}>다음</button>
                    </div>
                )}
                {step === 2 && (
                    <div className="step">
                        <h3 className="text-lg font-semibold mb-4">정보 입력</h3>
                        <div className="form-group">
                            <label htmlFor="name">이름</label>
                            <input type="text" id="name" name="name" value={data.name} onChange={handleChange} required />
                            {errors.name && <p className="error">{errors.name}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="studentId">학번</label>
                            <input type="text" id="studentId" name="studentId" value={data.studentId} onChange={handleChange} required />
                            {errors.studentId && <p className="error">{errors.studentId}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">이메일</label>
                            <input type="email" id="email" name="email" value={data.email} onChange={handleChange} required />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">전화번호</label>
                            <input type="tel" id="phone" name="phone" value={data.phone} onChange={handleChange} required />
                            {errors.phone && <p className="error">{errors.phone}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="id">아이디</label>
                            <input type="text" id="id" name="id" value={data.id} onChange={handleChange} required />
                            {errors.id && <p className="error">{errors.id}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">비밀번호</label>
                            <input type="password" id="password" name="password" value={data.password} onChange={handleChange} required />
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">비밀번호 확인</label>
                            <input type="password" id="confirm-password" name="confirmPassword" value={data.confirmPassword} onChange={handleChange} required />
                            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                        </div>

                        <div className="flex justify-between mt-4">                            <button type="button" onClick={prevStep}>이전</button>
                        <button onClick={prevStep} className="bg-gray-400 text-white py-2 px-4 rounded">이전</button>
                            <button onClick={nextStep} className="bg-blue-500 text-white py-2 px-4 rounded">다음</button>
                        </div>
                    </div>
                )}
                {step === 3 && (
                    <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">가입 완료</h3>
                    <p className="text-gray-600 mb-4">가입이 완료되었습니다. 로그인하여 서비스를 이용하세요.</p>
                    
                        <Link to="/Login">
                            <button type="button">회원가입 완료</button>
                        </Link>
                    </div>
                )}
            </div>

        </div>        </div>
    );
};
export default SignUp;
