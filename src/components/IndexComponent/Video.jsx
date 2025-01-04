import React from "react";

const Video = () => {
  return (
    <div className="container py-10 px-5 sm:px-3 lg:px-0">
      <h3 className="text-[32px] lg:text-[42px]">What success on Fiverr looks like</h3>
      <p className="mt-3 text-lg ">
        Vontélle Eyewear turns to Fiverr freelancers to bring their vision to
        life.
      </p>
      <div className="my-10">
        <video
          className="w-full rounded-2xl h-[400px] md:h-[500px] lg:h-[650px] object-cover"
          controls
          muted
          loop
          autoPlay
        >
          <source
            src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/generic_asset/asset/4934b0c8f6441211d97f83585a7c9c00-1722433273322/Vontelle%20Cutdown-%20Breakthrough%20V5"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <h3 className="text-3xl my-12">Vontélle’s go-to services</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mt-10 gap-10">
        <div className="py-6 px-4 rounded-3xl box-shadow flex flex-col gap-3 justify-center items-center hover:shadow-xl duration-300 ease-in-out">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666557/3D-Industrial-Design_2x.png"
            alt=""
            className="w-[35%]"
          />
          <h3 className="text-lg font-semibold">3D Industrial Design</h3>
        </div>
        <div className="py-6 px-4 rounded-3xl box-shadow flex flex-col gap-3 justify-center items-center hover:shadow-xl duration-300 ease-in-out">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666565/E-commerce-Website-Development_2x.png"
            alt=""
            className="w-[35%]"
          />
          <h3 className="text-lg font-semibold text-center">
            E-commerce Website Development
          </h3>
        </div>
        <div className="py-6 px-4 rounded-3xl box-shadow flex flex-col gap-3 justify-center items-center hover:shadow-xl duration-300 ease-in-out">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666560/Email-Marketing_2x.png"
            alt=""
            className="w-[35%]"
          />
          <h3 className="text-lg font-semibold">Email Marketing</h3>
        </div>
        <div className="py-6 px-4 rounded-3xl box-shadow flex flex-col gap-3 justify-center items-center hover:shadow-xl duration-300 ease-in-out">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666567/Press-Releases_2x.png"
            alt=""
            className="w-[35%]"
          />
          <h3 className="text-lg font-semibold">Press Releases</h3>
        </div>
        <div className="py-6 px-4 rounded-3xl box-shadow flex flex-col gap-3 justify-center items-center hover:shadow-xl duration-300 ease-in-out">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666561/Logo-Design_2x.png"
            alt=""
            className="w-[35%]"
          />
          <h3 className="text-lg font-semibold">Logo Design</h3>
        </div>
      </div>
      <h3 className="text-[30px] lg:text-[40px] my-20">Make it all happen with freelancers</h3>
      <div className="grid grid-cols-1 lg:grid-cols-4 mb-10 gap-10">
        <div className="flex flex-col items-start gap-2 w-2/3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="65"
            viewBox="0 0 64 65"
            fill="none"
          >
            <path
              d="M18.938 9.563H9.563v9.374h9.374V9.563zm17.75 0h-9.376v9.374h9.375V9.563zm0 17.75h-9.376v9.375h9.375v-9.376zm17.75-17.75h-9.376v9.374h9.376V9.563zm-35.5 17.75H9.563v9.375h9.374v-9.376zm0 17.75H9.563v9.374h9.374v-9.374zm8.375 4.687h9.375M32 45.063v9.374m13.063-4.687h9.374m-4.687-4.687v9.374M45.063 32h9.374m-4.687-4.687v9.375"
              stroke="#404145"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-lg">
            Access a pool of top talent across 700 categories
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 w-2/3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="65"
            viewBox="0 0 64 65"
            fill="none"
          >
            <path
              d="M31.818 57.062C17.895 57.062 6.6 45.776 6.6 31.844a25.092 25.092 0 016.318-16.697"
              stroke="#404145"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.052 19.009l-.073-5.349-5.003 1.886m22.806-8.92C45.706 6.626 57 17.912 57 31.844a25.092 25.092 0 01-6.318 16.697"
              stroke="#404145"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M49.55 44.68l.072 5.348 4.995-1.894m-22.862.48c9.261 0 16.77-7.508 16.77-16.77 0-9.261-7.509-16.769-16.77-16.769-9.262 0-16.77 7.508-16.77 16.77 0 9.261 7.508 16.77 16.77 16.77z"
              stroke="#404145"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25.637 31.06l4.29 4.781 8.046-8.366"
              stroke="#404145"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-lg">
            Enjoy a simple, easy-to-use matching experience
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 w-2/3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="65"
            viewBox="0 0 64 65"
            fill="none"
          >
            <path
              d="M9.015 10.992c1.114 0 2.017-.888 2.017-1.984s-.903-1.984-2.017-1.984C7.902 7.024 7 7.912 7 9.008s.903 1.984 2.016 1.984zm0 46.033c1.114 0 2.016-.889 2.016-1.984 0-1.096-.902-1.985-2.016-1.985-1.113 0-2.016.889-2.016 1.985 0 1.095.903 1.984 2.016 1.984zm45.969-46.033c1.113 0 2.016-.888 2.016-1.984s-.903-1.984-2.016-1.984c-1.114 0-2.017.888-2.017 1.984s.903 1.984 2.017 1.984zm0 46.033c1.113 0 2.016-.889 2.016-1.984 0-1.096-.903-1.985-2.016-1.985-1.114 0-2.017.889-2.017 1.985 0 1.095.903 1.984 2.017 1.984z"
              stroke="#404145"
              stroke-width="1.6"
              stroke-miterlimit="10"
            />
            <path
              d="M11.032 9.405h41.533m-41.13 45.238h41.533m2.217-43.056v40.874M9.217 11.587v40.874"
              stroke="#404145"
              stroke-width="1.6"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M36.33 17.601H24.423l-4.33 16.235h8.66l-2.166 12.987 17.317-19.481h-9.74l2.164-9.74z"
              stroke="#404145"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-lg">
            Get quality work done quickly and within budget
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 w-2/3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="65"
            viewBox="0 0 64 65"
            fill="none"
          >
            <path
              d="M60.53 9.024H31.945c-1.4 0-2.47 1.06-2.47 2.444v24.494c0 1.385 1.07 2.444 2.47 2.444h13.48l7.67 6.447c.495.57 1.483.244 1.483-.489v-5.958h5.95c1.4 0 2.471-1.06 2.471-2.444V11.467c0-1.384-1.07-2.443-2.47-2.443z"
              stroke="#404145"
              stroke-width="1.6"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M45.847 14.324a.43.43 0 01.316.13.43.43 0 01.13.316v1.898c1.32.055 2.507.332 3.562.832 1.062.5 1.855 1.156 2.379 1.969.031.039.047.101.047.187 0 .266-.153.399-.457.399-.196 0-.336-.07-.422-.211-.453-.703-1.13-1.262-2.028-1.676-.89-.422-1.914-.66-3.07-.715l.012 5.871c.836.055 1.644.133 2.425.235.79.101 1.5.265 2.133.492.633.219 1.133.535 1.5.95.375.413.563.96.563 1.64 0 .68-.188 1.27-.563 1.77-.375.491-.879.902-1.511 1.23a8.604 8.604 0 01-2.121.75 13.55 13.55 0 01-2.403.281v1.688c0 .289-.144.433-.433.433a.43.43 0 01-.317-.129.392.392 0 01-.129-.304v-1.688c-1.593-.039-3.023-.32-4.289-.844-1.265-.523-2.207-1.277-2.824-2.261a.415.415 0 01-.047-.188c0-.11.047-.2.14-.27a.497.497 0 01.329-.117c.187 0 .324.07.41.211.54.867 1.36 1.524 2.461 1.97 1.102.444 2.371.687 3.809.726l-.012-5.989a62.258 62.258 0 01-2.508-.234 11.524 11.524 0 01-2.203-.457c-.656-.219-1.18-.531-1.57-.938-.391-.414-.586-.968-.586-1.664 0-.367.066-.691.199-.972.14-.29.309-.547.504-.774.593-.687 1.453-1.218 2.578-1.593a12.162 12.162 0 013.562-.61V14.77a.44.44 0 01.118-.305.413.413 0 01.316-.14zm-.41 8.942l-.012-5.824c-.648.023-1.32.101-2.015.234a8.73 8.73 0 00-1.922.574c-.586.25-1.063.574-1.43.973-.367.39-.55.855-.55 1.394 0 .54.16.973.48 1.301.328.328.77.582 1.324.762.562.172 1.199.3 1.91.387.71.078 1.45.144 2.215.199zm.879.703l.011 5.93a12.72 12.72 0 002.04-.235 7.835 7.835 0 001.828-.586c.547-.265.984-.597 1.312-.996.328-.406.492-.887.492-1.441 0-.711-.27-1.242-.808-1.594-.532-.36-1.23-.61-2.098-.75a27.949 27.949 0 00-2.777-.328z"
              fill="#404145"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M39.156 22.281c.39.407.914.72 1.57.938.656.21 1.39.363 2.203.457.82.094 1.656.172 2.508.234l.012 5.989a14.458 14.458 0 01-.3-.012c-1.315-.062-2.485-.3-3.509-.715-1.102-.445-1.922-1.102-2.461-1.969-.086-.14-.223-.21-.41-.21a.497.497 0 00-.328.117.323.323 0 00-.14.27.42.42 0 00.046.187c.617.984 1.559 1.738 2.824 2.261 1.266.524 2.696.805 4.29.844v1.688a.39.39 0 00.128.304.43.43 0 00.317.13c.289 0 .433-.145.433-.434v-1.688a13.55 13.55 0 002.403-.281 8.604 8.604 0 002.12-.75c.633-.328 1.137-.738 1.512-1.23.375-.5.563-1.09.563-1.77 0-.68-.188-1.227-.563-1.64-.367-.415-.867-.731-1.5-.95a10.187 10.187 0 00-2.133-.492c-.78-.102-1.59-.18-2.425-.235l-.012-5.87c.101.004.201.01.3.018 1.034.079 1.958.311 2.77.696.899.414 1.575.973 2.028 1.676.086.14.226.21.422.21.304 0 .457-.132.457-.398 0-.085-.016-.148-.047-.187-.524-.813-1.317-1.469-2.38-1.969-1.054-.5-2.241-.777-3.562-.832V14.77a.43.43 0 00-.129-.317.43.43 0 00-.316-.129.413.413 0 00-.316.141.438.438 0 00-.118.305v1.898c-1.25.031-2.437.235-3.562.61s-1.984.906-2.578 1.593a3.569 3.569 0 00-.504.774c-.133.281-.2.605-.2.972 0 .696.196 1.25.587 1.664zm5.957-5.902a12.384 12.384 0 00-3.357.614c-1.16.387-2.072.943-2.71 1.682a3.87 3.87 0 00-.547.838l-.001.004a2.553 2.553 0 00-.228 1.1c0 .754.213 1.389.667 1.87l.002.002c.431.449 1 .784 1.692 1.015h.003c.678.218 1.432.374 2.26.47.736.084 1.484.156 2.243.215l.011 5.398c-1.281-.063-2.412-.295-3.396-.693-1.052-.425-1.817-1.044-2.318-1.848-.148-.243-.39-.354-.665-.354a.796.796 0 00-.514.182.622.622 0 00-.255.505c0 .114.03.223.079.322l.006.013.008.012c.656 1.046 1.65 1.837 2.964 2.38 1.225.507 2.595.79 4.103.856v1.398c0 .2.072.382.222.521a.73.73 0 00.524.212c.19 0 .389-.048.537-.196.148-.148.196-.347.196-.537v-1.4a13.78 13.78 0 002.164-.276h.003a8.898 8.898 0 002.195-.777c.666-.345 1.206-.782 1.612-1.315l.001-.002c.418-.556.623-1.21.623-1.95 0-.736-.205-1.36-.64-1.84-.407-.459-.953-.8-1.623-1.032a10.484 10.484 0 00-2.194-.507m-3.667-6.882v-1.61c0-.19.067-.364.196-.506a.713.713 0 01.538-.239.73.73 0 01.529.217.73.73 0 01.216.529v1.614c1.242.082 2.373.363 3.39.845 1.099.517 1.938 1.203 2.498 2.068a.6.6 0 01.1.36c0 .19-.056.384-.216.524-.153.133-.351.174-.54.174-.276 0-.525-.106-.676-.351-.417-.646-1.044-1.17-1.9-1.563l-.002-.002c-.769-.364-1.648-.588-2.641-.666l.01 5.271c.743.054 1.465.126 2.165.217m-5.314-5.29h-.003a8.427 8.427 0 00-1.856.554l-.002.001c-.553.236-.993.538-1.326.9l-.003.002a1.67 1.67 0 00-.469 1.19c0 .474.139.827.394 1.09.287.285.682.517 1.2.686.542.165 1.16.29 1.855.375.607.066 1.233.124 1.88.174l-.01-5.186c-.536.034-1.09.105-1.66.214zm1.66-.515c.1-.006.2-.01.3-.014l.01 5.824-.3-.022c-.658-.05-1.296-.11-1.914-.177a11.127 11.127 0 01-1.91-.387c-.555-.18-.996-.434-1.324-.762-.32-.328-.48-.762-.48-1.3 0-.54.183-1.005.55-1.395.367-.399.844-.723 1.43-.973a8.73 8.73 0 011.922-.574 13.63 13.63 0 011.715-.22zm5.897 7.84c-.485-.328-1.139-.567-1.978-.703h-.003c-.755-.13-1.563-.23-2.426-.3l.01 5.291a12.408 12.408 0 001.682-.214 7.541 7.541 0 001.757-.562c.514-.25.914-.556 1.21-.915a1.93 1.93 0 00.424-1.252c0-.622-.228-1.053-.672-1.343l-.004-.002zm.484 2.786c-.328.399-.765.73-1.312.996a7.842 7.842 0 01-1.828.586 12.724 12.724 0 01-2.04.235l-.011-5.93.3.023c.88.07 1.705.172 2.477.305.867.14 1.566.39 2.098.75.539.352.808.883.808 1.594 0 .555-.164 1.035-.492 1.441z"
              fill="#404145"
            />
            <path
              d="M28.44 20.905H3.47c-1.4 0-2.47 1.06-2.47 2.444v24.494c0 1.385 1.07 2.443 2.47 2.443h5.95v5.96c0 .732.99 1.058 1.483.488l7.67-6.448h13.481c1.4 0 2.47-1.058 2.47-2.443v-9.47"
              stroke="#404145"
              stroke-width="1.6"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M17.026 43.525c4.56 0 8.256-3.648 8.256-8.146 0-4.5-3.696-8.146-8.256-8.146-4.56 0-8.256 3.647-8.256 8.146 0 4.498 3.697 8.146 8.256 8.146zm-2.14-11.465v2.414m4.281-2.414v2.414"
              stroke="#404145"
              stroke-width="1.6"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M20.696 36.887c-.612 1.448-2.018 2.414-3.73 2.414-1.652 0-3.12-.966-3.731-2.414"
              stroke="#404145"
              stroke-width="1.6"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
          </svg>
          <p className="text-lg">Only pay when you’re happy</p>
        </div>
      </div>
      <div className="mt-20 text-center">
        <button className="py-2 px-5 text-white bg-black rounded-xl font-semibold text-lg hover:opacity-80">Join now</button>
      </div>
    </div>
  );
};

export default Video;
