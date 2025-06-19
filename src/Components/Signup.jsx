import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock, Phone, MapPin, UserCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


// Register Component
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate=useNavigate();

  // function handleRedirect(){
  //   navigate('/login')
  // }
 
  function handleSubmit(e){
        e.preventDefault();
        const formData=new FormData(e.target);
        const userName=formData.get("name")?.trim();
        const userEmail=formData.get("email")?.trim();
        const userPassword=formData.get("password")?.trim();
        const confirmPass=formData.get("confirmPassword")?.trim();

        if(userPassword!==confirmPass){
          console.log("Both passwords do not match")
          return;
        }

            if (!userName || !userEmail || !userPassword) {
        console.log("All fields are required");
        return;
      }

         if (!isValidEmail(userEmail)) {
        console.log("Invalid email address");
        return;
      }
        console.log(userName,userEmail,userPassword);
        navigate('/login');
      }



        function isValidEmail(email) {
  // Basic email pattern: checks for format like "example@domain.com"
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
      }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-cyan-100 flex justify-center items-start pt-5">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full flex items-center justify-center mb-4">
            <UserCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Create Account
          </h2>
          <p className="text-gray-600">
            Join us today
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-opacity-95">
         <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Name Field */}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
               Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {!showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {!showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Mobile Field
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number (Optional)
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  name="mobile"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Enter your mobile number"
                />
              </div>
            </div>

            {/* Address Field */}
            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address (Optional)
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <textarea
                  name="address"
                  rows="3"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
                  placeholder="Enter your address"
                />
              </div>
            </div> */} 

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-medium hover:from-indigo-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
            >
              Create Account
            </button>

          </div>
            </form>
          {/* Toggle Mode */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?
              <button
                type="button"
                className="ml-1 text-indigo-600 hover:text-indigo-700 font-medium transition-colors cursor-pointer"
             onClick={()=>{navigate('/login')}} >
                Sign in
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </div>
      </div>
    </div>
  );
};
export default Register;