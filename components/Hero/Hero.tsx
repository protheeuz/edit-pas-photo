import useScrollPosition from "hooks/useScrollPosition"
import React from "react"

const Hero = (props: React.HTMLAttributes<HTMLElement>) => {
  const scrollPosition = useScrollPosition()
  return (
    <section
      className={`flex flex-col gap-[30px] w-full ${props.className}`}
      style={{
        opacity: 1 - (scrollPosition * 0.5) / 100,
        transform: `translateY(${scrollPosition * 0.5}px) scale(${
          1 - (scrollPosition * 0.125) / 100
        })`,
      }}
    >
      <h1 className="md:text-[54px] text-[36px] text-transparent bg-white-linear-gradient bg-clip-text tracking-tight md:leading-[54px] leading-[36px]">
        Edit pas foto. <br /> Tanpa skill edit foto.
      </h1>
      <a
        href="https://github.com/protheeuz/edit-photo"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white mx-auto flex items-center gap-[10px] bg-white bg-opacity-0 hover:bg-opacity-[0.08] rounded-full px-[10px] py-[5px] transition border-white border-[0.125px] border-opacity-0 hover:border-opacity-[0.08] opacity-50 hover:opacity-100"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 0.175049C3.128 0.175049 0 3.30305 0 7.17505C0 10.259 2.013 12.885 4.79 13.825C5.14 13.891 5.272 13.672 5.272 13.497V12.316C3.325 12.731 2.909 11.375 2.909 11.375C2.581 10.565 2.122 10.347 2.122 10.347C1.488 9.90905 2.166 9.93105 2.166 9.93105C2.866 9.97505 3.237 10.653 3.237 10.653C3.872 11.725 4.878 11.419 5.272 11.243C5.338 10.784 5.512 10.478 5.709 10.303C4.156 10.128 2.516 9.51605 2.516 6.84705C2.516 6.08105 2.778 5.46905 3.237 4.96605C3.172 4.79105 2.931 4.06905 3.303 3.10605C3.303 3.10605 3.893 2.90905 5.228 3.82805C5.79831 3.67179 6.38668 3.5911 6.978 3.58805C7.568 3.58805 8.181 3.67505 8.728 3.82805C10.063 2.93105 10.653 3.10605 10.653 3.10605C11.025 4.06905 10.784 4.79105 10.719 4.96605C11.179 5.44605 11.441 6.08105 11.441 6.84605C11.441 9.53705 9.8 10.128 8.247 10.303C8.487 10.522 8.728 10.937 8.728 11.593V13.519C8.728 13.716 8.859 13.934 9.209 13.847C11.988 12.884 14 10.259 14 7.17505C14 3.30305 10.872 0.175049 7 0.175049V0.175049Z"
            fill="currentColor"
          ></path>
        </svg>
        protheeuz/editfoto
      </a>
    </section>
  )
}

export default Hero
