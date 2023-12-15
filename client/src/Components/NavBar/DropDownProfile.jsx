import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FaUser } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
import { userContext } from '../../App';
const DropDownProfile = ({ currentUser }) => {
  console.log(userContext,'hey from dop');
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm [font-family:'SF_Pro_Display-Semibold',Helvetica] font-normal  text-white shadow-sm  ring-inset hover:bg-gray-10">
         <FaUser/>
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#ffffff1a] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {currentUser ? (
              <>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/profile"
                      className={classNames(
                        active ? 'bg-[#ffffff1a] text-white' : 'text-white',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/home"
                      className={classNames(
                        active ? 'bg-[#ffffff1a] text-white' : 'text-white',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Logout
                    </Link>
                  )}
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/SignIn"
                      className={classNames(
                        active ? 'bg-[#ffffff1a] text-white' : 'text-white',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Login
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/SignUp"
                      className={classNames(
                        active ? 'bg-[#ffffff1a] text-white' : 'text-white',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Signup
                    </Link>
                  )}
                </Menu.Item>
              </>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropDownProfile;
