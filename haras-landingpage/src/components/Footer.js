import React from "react";

function Footer() {
  return (
    <footer className="bg-darkBrown text-golden text-3xl py-10 text-center">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl mb-4">Haras du Lorem Ipsum</h2>
        <p className="text-2xl mb-4">
          Adresse : 123 Rue du Développement, 72500 Somewhere
        </p>
        <p className="text-2xl mb-4">Téléphone : 07 56 85 96 25</p>
        <p className="text-2xl mb-8">Email : infos@harasduloremipsum.com</p>
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-golden hover:text-yellow-600 transition duration-300"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.833.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.896-.955-2.173-1.55-3.591-1.55-2.717 0-4.918 2.201-4.918 4.917 0 .386.044.762.128 1.124-4.083-.205-7.702-2.162-10.126-5.138-.423.726-.666 1.562-.666 2.456 0 1.692.862 3.183 2.173 4.061-.801-.026-1.554-.245-2.213-.611v.061c0 2.362 1.679 4.334 3.91 4.779-.409.111-.84.171-1.285.171-.314 0-.617-.03-.916-.086.617 1.926 2.407 3.327 4.526 3.366-1.662 1.303-3.757 2.078-6.032 2.078-.392 0-.779-.023-1.161-.067 2.149 1.379 4.701 2.185 7.446 2.185 8.936 0 13.823-7.405 13.823-13.822 0-.21-.004-.42-.014-.63.95-.688 1.776-1.549 2.428-2.53z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-golden hover:text-yellow-600 transition duration-300"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.676 0h-21.352c-.73 0-1.324.594-1.324 1.324v21.353c0 .73.593 1.324 1.324 1.324h21.351c.73 0 1.323-.594 1.323-1.324v-21.353c.001-.73-.593-1.324-1.323-1.324zm-13.146 20.093h-3.073v-10.5h3.073v10.5zm-1.537-11.876c-.988 0-1.793-.805-1.793-1.793s.805-1.793 1.793-1.793 1.793.805 1.793 1.793-.804 1.793-1.793 1.793zm13.287 11.876h-3.075v-5.859c0-1.394-.027-3.184-1.941-3.184-1.943 0-2.239 1.517-2.239 3.096v5.947h-3.074v-10.5h2.956v1.439h.042c.414-.782 1.428-1.611 2.945-1.611 3.14 0 3.721 2.068 3.721 4.748v5.924z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-golden hover:text-yellow-600 transition duration-300"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 0h-15.231c-2.414 0-4.384 1.97-4.384 4.385v15.231c0 2.414 1.97 4.384 4.384 4.384h15.231c2.414 0 4.384-1.97 4.384-4.384v-15.231c0-2.414-1.97-4.385-4.384-4.385zm-8.615 18.346c-4.64 0-8.346-3.706-8.346-8.346s3.706-8.346 8.346-8.346 8.346 3.706 8.346 8.346-3.706 8.346-8.346 8.346zm0-14.615c-3.451 0-6.269 2.818-6.269 6.269s2.818 6.269 6.269 6.269 6.269-2.818 6.269-6.269-2.818-6.269-6.269-6.269zm0 10.577c-2.374 0-4.308-1.933-4.308-4.308s1.933-4.308 4.308-4.308 4.308 1.933 4.308 4.308-1.933 4.308-4.308 4.308zm6.692-11.423c-.796 0-1.441-.645-1.441-1.441s.645-1.441 1.441-1.441 1.441.645 1.441 1.441-.645 1.441-1.441 1.441z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
