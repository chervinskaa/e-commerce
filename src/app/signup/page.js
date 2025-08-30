import ImageSection from '@/components/SignUp_LogIn/ImageSection';
import SignUpForm from '@/components/SignUp_LogIn/SignUpForm';

export default function SignUpPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white text-gray-900">
            <ImageSection />
            <SignUpForm />
        </div>
    );
}