import React from 'react'
import { FaTwitter, FaFacebookF, FaReddit, FaGithub } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'

function Footer() {
  return (
    <div className="rounded-div mt-8 pt-8 text-primary">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-evenly w-full md:max-w-[300px] uppercase">
          <div>
            <h2 className="font-bold">Support</h2>
            <ul>
              <li className="text-small py-2">Help Center</li>
              <li className="text-small py-2">Contact Us</li>
              <li className="text-small py-2">API Status</li>
              <li className="text-small py-2">Documentation</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold">Info</h2>
            <ul>
              <li className="text-small py-2">About Us</li>
              <li className="text-small py-2">Careers</li>
              <li className="text-small py-2">Invest</li>
              <li className="text-small py-2">Legal</li>
            </ul>
          </div>
        </div>

        <div className="text-right">
          <div className="flex justify-end w-full">
            <div className="w-full md:w-[300px] py-4 relative">
              <div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]">
                <ThemeToggle />
              </div>
              <p className="text-center md:text-right">
                Sign up for crypto news
              </p>
              <div className="py-4">
                <form>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl"
                  />
                  <button className="bg-button text-btnText px-4 p-2 mr-2 w-full rounded-2xl shadow-xl hover:shadow-2xl my-2">
                    Sign up
                  </button>
                </form>
              </div>

              <div className="flex py-4 justify-between text-accent">
                <FaTwitter />
                <FaFacebookF />
                <FaReddit />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-5">Powered by Coingecko</p>
    </div>
  )
}

export default Footer
