import { H1 } from "@/utils/typography";
import { motion } from "framer-motion";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard | User",
  description: "...",
};

export default function User() {
  return (
    <section>
      <div className="overflow-hidden bg-white flex flex-col gap-3 w-full items-start">
        <div className="self-stretch relative flex flex-col mb-20 pb-[306px]">
          <div className="h-[177px] overflow-hidden bg-[#7a71fe] w-full absolute top-3 left-0" />
          <div className="flex flex-col items-center justify-center">
            <div className="w-[394px] h-64 overflow-hidden bg-black absolute top-[120px] l pt-[109px] pb-32 px-5 rounded-[36px]">
              <div className="w-[298px] h-64 bg-[url(https://res.cloudinary.com/dkoe20rzl/image/upload/v1692923465/iQC7prgj2tZflsblDO5j_ny9wx9.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-0 left-24 flex flex-col justify-end items-end pr-10 py-8">
                <div className="bg-[#7a71fe] flex flex-col w-24 h-8 shrink-0 items-center py-2 rounded-lg">
                  <div className="text-base font-aeonik font-bold tracking-[0.21] leading-[13.2px] capitalize text-white">
                    Join Now
                  </div>
                </div>
              </div>
              <div className="text-4xl font-blogh tracking-[0.46] leading-[34.1px] capitalize text-white absolute top-10 left-5 h-16 w-3/5">
                Spagfest Raffle event
              </div>
              <div className="text-xs tracking-[0.14] leading-[10.1px] capitalize text-white relative">
                Hosted by Olawale Spagfest
              </div>
            </div>
          </div>
          <div className="shadow-[0px_2px_5px_0px_rgba(0,_0,_0,_0.25)] overflow-hidden bg-white relative flex flex-col gap-6 pb-2 px-4">
            <div className="flex flex-row gap-20 items-start ml-3 mr-2">
              <div className="flex flex-row mb-1 gap-8 w-64 items-start"></div>
            </div>
            <div className="flex flex-col ml-5 gap-3">
              <div className="flex flex-row justify-between ml-[107px] items-start">
                <div className="text-2xl font-aeonik font-bold tracking-[0.36] leading-[23.1px] capitalize">
                  Dashboard
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="30"
                  viewBox="0 0 26 30"
                  fill="none"
                >
                  <path
                    d="M25.5 6.37501C25.5 9.10917 23.2758 11.3333 20.5417 11.3333C17.8075 11.3333 15.5833 9.10917 15.5833 6.37501C15.5833 3.64084 17.8075 1.41667 20.5417 1.41667C23.2758 1.41667 25.5 3.64084 25.5 6.37501ZM22.6667 13.8692C21.9583 14.0533 21.25 14.1667 20.5417 14.1667C18.4763 14.1629 16.4967 13.3408 15.0363 11.8804C13.5759 10.42 12.7537 8.44034 12.75 6.37501C12.75 4.29251 13.5717 2.40834 14.875 1.00584C14.6179 0.69069 14.2937 0.436865 13.9261 0.262861C13.5585 0.0888578 13.1567 -0.000941381 12.75 7.4413e-06C11.1917 7.4413e-06 9.91667 1.27501 9.91667 2.83334V3.24417C5.70917 4.49084 2.83333 8.35834 2.83333 12.75V21.25L0 24.0833V25.5H25.5V24.0833L22.6667 21.25V13.8692ZM12.75 29.75C14.3225 29.75 15.5833 28.4892 15.5833 26.9167H9.91667C9.91667 27.6681 10.2152 28.3888 10.7465 28.9201C11.2779 29.4515 11.9986 29.75 12.75 29.75Z"
                    fill="#9747FF"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 w-3/5 items-center mb-3 ml-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
          >
            <path
              d="M18.6033 15.3195C18.8935 15.3195 19.1718 15.2042 19.377 14.999C19.5823 14.7938 19.6975 14.5155 19.6975 14.2252C19.6975 13.935 19.5823 13.6567 19.377 13.4515C19.1718 13.2463 18.8935 13.131 18.6033 13.131C18.3131 13.131 18.0347 13.2463 17.8295 13.4515C17.6243 13.6567 17.509 13.935 17.509 14.2252C17.509 14.5155 17.6243 14.7938 17.8295 14.999C18.0347 15.2042 18.3131 15.3195 18.6033 15.3195ZM18.6033 19.6965C18.8935 19.6965 19.1718 19.5813 19.377 19.376C19.5823 19.1708 19.6975 18.8925 19.6975 18.6023C19.6975 18.3121 19.5823 18.0337 19.377 17.8285C19.1718 17.6233 18.8935 17.508 18.6033 17.508C18.3131 17.508 18.0347 17.6233 17.8295 17.8285C17.6243 18.0337 17.509 18.3121 17.509 18.6023C17.509 18.8925 17.6243 19.1708 17.8295 19.376C18.0347 19.5813 18.3131 19.6965 18.6033 19.6965ZM14.2262 14.2252C14.2262 14.5155 14.1109 14.7938 13.9057 14.999C13.7005 15.2042 13.4222 15.3195 13.132 15.3195C12.8418 15.3195 12.5634 15.2042 12.3582 14.999C12.153 14.7938 12.0377 14.5155 12.0377 14.2252C12.0377 13.935 12.153 13.6567 12.3582 13.4515C12.5634 13.2463 12.8418 13.131 13.132 13.131C13.4222 13.131 13.7005 13.2463 13.9057 13.4515C14.1109 13.6567 14.2262 13.935 14.2262 14.2252ZM14.2262 18.6023C14.2262 18.8925 14.1109 19.1708 13.9057 19.376C13.7005 19.5813 13.4222 19.6965 13.132 19.6965C12.8418 19.6965 12.5634 19.5813 12.3582 19.376C12.153 19.1708 12.0377 18.8925 12.0377 18.6023C12.0377 18.3121 12.153 18.0337 12.3582 17.8285C12.5634 17.6233 12.8418 17.508 13.132 17.508C13.4222 17.508 13.7005 17.6233 13.9057 17.8285C14.1109 18.0337 14.2262 18.3121 14.2262 18.6023ZM7.66067 15.3195C7.95088 15.3195 8.22921 15.2042 8.43443 14.999C8.63964 14.7938 8.75493 14.5155 8.75493 14.2252C8.75493 13.935 8.63964 13.6567 8.43443 13.4515C8.22921 13.2463 7.95088 13.131 7.66067 13.131C7.37045 13.131 7.09212 13.2463 6.88691 13.4515C6.68169 13.6567 6.56641 13.935 6.56641 14.2252C6.56641 14.5155 6.68169 14.7938 6.88691 14.999C7.09212 15.2042 7.37045 15.3195 7.66067 15.3195ZM7.66067 19.6965C7.95088 19.6965 8.22921 19.5813 8.43443 19.376C8.63964 19.1708 8.75493 18.8925 8.75493 18.6023C8.75493 18.3121 8.63964 18.0337 8.43443 17.8285C8.22921 17.6233 7.95088 17.508 7.66067 17.508C7.37045 17.508 7.09212 17.6233 6.88691 17.8285C6.68169 18.0337 6.56641 18.3121 6.56641 18.6023C6.56641 18.8925 6.68169 19.1708 6.88691 19.376C7.09212 19.5813 7.37045 19.6965 7.66067 19.6965Z"
              fill="#9747FF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.66114 1.91492C7.8788 1.91492 8.08755 2.00138 8.24146 2.15529C8.39537 2.3092 8.48184 2.51795 8.48184 2.73561V3.57053C9.20624 3.55631 10.004 3.55631 10.8816 3.55631H15.3822C16.2609 3.55631 17.0587 3.55631 17.7831 3.57053V2.73561C17.7831 2.51795 17.8695 2.3092 18.0234 2.15529C18.1773 2.00138 18.3861 1.91492 18.6038 1.91492C18.8214 1.91492 19.0302 2.00138 19.1841 2.15529C19.338 2.3092 19.4244 2.51795 19.4244 2.73561V3.64057C19.709 3.66245 19.9781 3.68981 20.2331 3.72373C21.5156 3.89662 22.554 4.25992 23.3736 5.07843C24.1921 5.89803 24.5554 6.93648 24.7283 8.21895C24.8958 9.46641 24.8958 11.0586 24.8958 13.0698V15.3809C24.8958 17.3921 24.8958 18.9854 24.7283 20.2318C24.5554 21.5142 24.1921 22.5527 23.3736 23.3723C22.554 24.1908 21.5156 24.5541 20.2331 24.727C18.9856 24.8944 17.3935 24.8944 15.3822 24.8944H10.8826C8.87139 24.8944 7.27815 24.8944 6.03179 24.727C4.74931 24.5541 3.71086 24.1908 2.89126 23.3723C2.07275 22.5527 1.70946 21.5142 1.53656 20.2318C1.36914 18.9843 1.36914 17.3921 1.36914 15.3809V13.0698C1.36914 11.0586 1.36914 9.46532 1.53656 8.21895C1.70946 6.93648 2.07275 5.89803 2.89126 5.07843C3.71086 4.25992 4.74931 3.89662 6.03179 3.72373C6.28675 3.68981 6.55703 3.66245 6.84045 3.64057V2.73561C6.84045 2.51795 6.92691 2.3092 7.08082 2.15529C7.23473 2.00138 7.44348 1.91492 7.66114 1.91492ZM6.24955 5.3509C5.14981 5.49862 4.51514 5.77656 4.05227 6.23944C3.5894 6.70231 3.31145 7.33698 3.16373 8.43781C3.13856 8.62383 3.11777 8.8208 3.10026 9.02761H23.1646C23.1471 8.8197 23.1263 8.62383 23.1012 8.43671C22.9534 7.33698 22.6755 6.70231 22.2126 6.23944C21.7498 5.77656 21.1151 5.49862 20.0143 5.3509C18.8904 5.19989 17.4077 5.1977 15.321 5.1977H10.9439C8.85717 5.1977 7.37554 5.19989 6.24955 5.3509ZM3.01053 13.1311C3.01053 12.1966 3.01053 11.3836 3.02476 10.669H23.2401C23.2544 11.3836 23.2544 12.1966 23.2544 13.1311V15.3196C23.2544 17.4064 23.2522 18.8891 23.1012 20.014C22.9534 21.1137 22.6755 21.7484 22.2126 22.2113C21.7498 22.6741 21.1151 22.9521 20.0143 23.0998C18.8904 23.2508 17.4077 23.253 15.321 23.253H10.9439C8.85717 23.253 7.37554 23.2508 6.24955 23.0998C5.14981 22.9521 4.51514 22.6741 4.05227 22.2113C3.5894 21.7484 3.31145 21.1137 3.16373 20.0129C3.01272 18.8891 3.01053 17.4064 3.01053 15.3196V13.1311Z"
              fill="#9747FF"
            />
          </svg>
          <div className="text-base font-aeonik font-bold">
            Thursday, August 24, 2023
          </div>
        </div>
        <div className="flex flex-row gap-6 w-1/2 items-start mb-12 ml-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <g clipPath="url(#clip0_691_1845)">
              <path
                d="M10.2556 0.772827C12.9091 0.772827 15.4538 1.82689 17.33 3.70313C19.2063 5.57937 20.2603 8.12409 20.2603 10.7775C20.2603 13.4309 19.2063 15.9756 17.33 17.8519C15.4538 19.7281 12.9091 20.7822 10.2556 20.7822C7.60224 20.7822 5.05752 19.7281 3.18128 17.8519C1.30504 15.9756 0.250977 13.4309 0.250977 10.7775C0.250977 8.12409 1.30504 5.57937 3.18128 3.70313C5.05752 1.82689 7.60224 0.772827 10.2556 0.772827ZM2.12685 10.7775C2.12685 12.9334 2.98328 15.001 4.50772 16.5254C6.03217 18.0499 8.09976 18.9063 10.2556 18.9063C12.4115 18.9063 14.4791 18.0499 16.0036 16.5254C17.528 15.001 18.3844 12.9334 18.3844 10.7775C18.3844 8.62161 17.528 6.55402 16.0036 5.02957C14.4791 3.50513 12.4115 2.6487 10.2556 2.6487C8.09976 2.6487 6.03217 3.50513 4.50772 5.02957C2.98328 6.55402 2.12685 8.62161 2.12685 10.7775ZM10.8809 6.7131V10.4548L13.4171 11.4703C13.6406 11.5678 13.8174 11.7484 13.91 11.9739C14.0026 12.1995 14.0037 12.4522 13.9131 12.6786C13.8225 12.9049 13.6474 13.0871 13.4248 13.1865C13.2021 13.286 12.9496 13.2948 12.7205 13.2111L9.59409 11.9606C9.42032 11.8907 9.27139 11.7705 9.16643 11.6155C9.06147 11.4604 9.00528 11.2774 9.00506 11.0901V6.7131C9.00506 6.46434 9.10388 6.22578 9.27978 6.04988C9.45568 5.87398 9.69425 5.77516 9.943 5.77516C10.1918 5.77516 10.4303 5.87398 10.6062 6.04988C10.7821 6.22578 10.8809 6.46434 10.8809 6.7131Z"
                fill="#9747FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_691_1845">
                <rect
                  width="20.0093"
                  height="20.0093"
                  fill="white"
                  transform="translate(0.250977 0.772705)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="text-base font-aeonik font-bold mt-px">
            10:00 AM
            {"  "}-{"  "}
            12:30 PM
          </div>
        </div>
        <div className="text-lg font-aeonik font-bold text-[#7a71fe] ml-4">
          About
        </div>
        <div className="self-stretch relative flex flex-col justify-end pt-32">
          <div className="text-sm font-medium leading-[27.1px] absolute top-0 left-4 h-[108px] w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s,
          </div>
          <div className="text-sm font-medium leading-[27.1px] absolute top-[148px] left-4 h-[108px] w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s,
          </div>
          <div className="text-sm font-medium leading-[27.1px] absolute top-20 left-4 h-[108px] w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s,
          </div>
          <div className="shadow-[4px_0px_9px_0px_rgba(0,_0,_0,_0.25)] overflow-hidden bg-white relative flex flex-col justify-center h-32 shrink-0 items-center">
            <Link
              href="/tickets"
              className="active:scale-90 transition-all duration-300 bg-[#7a71fe] flex flex-col justify-center w-2/5 h-12 shrink-0 items-center rounded-lg"
            >
              <button className="text-2xl font-aeonik font-bold tracking-[0.35] leading-[22.2px] capitalize text-white">
                Buy Tickets
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
