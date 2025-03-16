import React from "react";
import { FaTwitter, FaFacebookSquare, FaDribbble, FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
    const year = '2025';
    const sizeIcons = 34;
    return (
        <footer id="Contact" className="relative bg-blueGray-200 pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl font-semibold text-blueGray-700">มาติดตามกันเถอะ!</h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            ค้นหาฉันบนแพลตฟอร์มใดๆ เหล่านี้ ฉันตอบกลับภายใน 1-2 วันทำการ
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6 flex">
                            <button className="bg-white text-[#5d6af2] shadow-lg font-normal h-12 w-12 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 relative group"
                                onMouseEnter={(e) => {
                                    const tooltip = document.createElement('div');
                                    tooltip.textContent = 'phoom300x';
                                    tooltip.className = 'absolute left-1/2 bottom-full -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 transition-opacity duration-200';
                                    e.currentTarget.appendChild(tooltip);
                                    requestAnimationFrame(() => tooltip.classList.add('opacity-100'));
                                }}
                                onMouseLeave={(e) => {
                                    const tooltip = e.currentTarget.querySelector('div');
                                    if (tooltip) {
                                        tooltip.classList.remove('opacity-100');
                                        tooltip.addEventListener('transitionend', () => tooltip.remove(), { once: true });
                                    }
                                }}
                            >
                                <a href="#" target="_blank">
                                    <FaDiscord size={sizeIcons} />
                                </a>
                            </button>
                            <button className="bg-white text-blue-600 shadow-lg font-normal h-12 w-12 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2">
                                <a href="https://www.facebook.com/phoom.krj/?locale=th_TH" target="_blank">
                                    <FaFacebookSquare size={sizeIcons} />
                                </a>
                            </button>
                            <button className="bg-white text-pink-400 shadow-lg font-normal h-12 w-12 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2">
                                <a href="https://www.instagram.com/phoomkrj/" target="_blank">
                                    <FaInstagram size={sizeIcons} />
                                </a>
                            </button>
                            <button className="bg-white text-gray-800 text-blueGray-800 shadow-lg font-normal h-12 w-12 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2">
                                <a href="https://github.com/Phoompirak" target="_blank">
                                    <FaGithub size={sizeIcons} />
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">งานที่ชอบ</span>
                                <ul className="list-unstyled">
                                    <li><a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">กราฟฟิค</a></li>
                                    <li><a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">ดีไซน์เนอร์</a></li>
                                    <li><a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">วิศวะคอมพิวเตอร์</a></li>
                                    <li><a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">โปรแกรมเมอร์</a></li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">ประสบการณ์</span>
                                <ul className="list-unstyled">
                                    <li><a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">ทำContent&Youtuber มา5ปี</a></li>
                                    <li><a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">เล่นกีต้าร์วงโรงเรียนมา2ปี</a></li>
                                    <li><a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">ทำป้ายไวนิล&บัตรสภา</a></li>
                                    <li><a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">ออกแบบเว็บไซต์</a></li>
                                    <li><a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">ป้ายแสดงความยินดี</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright &copy; {year} <a href="#" className="text-blueGray-500 hover:text-gray-800">Phoompirak Karajak</a>.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

