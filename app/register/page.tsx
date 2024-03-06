import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";

const Register = () => {
  return (
    <div className='w-full min-h-screen px-12 py-24  '>
      <div className=''>
        <RegisterForm/>
      </div>
    </div>

  );
};

export default Register;