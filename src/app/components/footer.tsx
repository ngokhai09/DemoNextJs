import React from "react";

export default function Footer() {
    return (
        <div className="bg-stone-200 text-black mt-5">
            <section className="xl:container mx-auto py-10 px-7 xl:px-10">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/3 lg:pr-9"><img
                        src="https://anphuocland.com/assets/icons/imgpsh_fullsize_anim.svg" alt=""
                        className="w-40 mx-auto mb-8"/><h2
                        className="font-semibold">CÔNG TY CỔ PHẦN TẬP ĐOÀN NMD GROUP - SÀN GIAO DỊCH BĐS AN PHƯỚC
                        LAND</h2>
                        <div className="flex items-center gap-x-3 font-semibold mt-5"><img
                            src="https://anphuocland.com/assets/icons/footer/location.svg" alt="" className="w-5"/><p>Số
                            6 tổ 2 thị trấn Đông
                            Anh, Hà Nội</p></div>
                        <div className="flex items-center gap-x-3 font-semibold mt-3"><img
                            src="https://anphuocland.com/assets/icons/footer/phone-call.svg" alt="" className="w-5"/>
                            <p>0886 923 362</p></div>
                        <div className="flex items-center gap-x-5 mt-10">
                            <div className="flex gap-x-2 text-base text-stone-500 font-semibold"><img
                                src="https://anphuocland.com/assets/icons/footer/google-play.svg" alt=""
                                className="w-5"/><p>Google Play</p>
                            </div>
                            <div className="flex items-center gap-x-2 text-lg font-semibold"><img
                                src="https://anphuocland.com/assets/icons/footer/apple.svg" alt=""
                                className="w-5 block"/><p>App Store</p></div>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3">
                        <div className="flex flex-col md:flex-row gap-4 mt-7 lg:mt-0">
                            <div className="flex items-center gap-x-3 w-1/3 ng-star-inserted"><img alt=""
                                                                                                   className="w-7"
                                                                                                   src="https://anphuocland.com/assets/icons/footer/phone-call.svg"/><span><p>Hotline</p><a
                                className="hover:text-slate-400 font-semibold" href=""><p>0886 923 362</p></a></span>
                            </div>
                            <div className="flex items-center gap-x-3 w-1/3 ng-star-inserted"><img alt=""
                                                                                                   className="w-7"
                                                                                                   src="https://anphuocland.com/assets/icons/footer/question.svg"/><span><p>Hỗ trợ khách hàng</p><a
                                className="hover:text-slate-400 font-semibold"
                                href="mailto:mrnguyen1368@gmail.com"><p>mrnguyen1368@gmail.com</p></a></span></div>
                            <div className="flex items-center gap-x-3 w-1/3 ng-star-inserted"><img alt=""
                                                                                                   className="w-7"
                                                                                                   src="https://anphuocland.com/assets/icons/footer/headset.svg"/><span><p>Chăm sóc khách hàng</p><a
                                className="hover:text-slate-400 font-semibold"
                                href="mailto:mrnguyen1368@gmail.com"><p>mrnguyen1368@gmail.com</p></a></span></div>
                        </div>
                        <div className="flex gap-x-8 mt-14">
                            <ul className="w-1/4 hidden md:block"><p className="uppercase font-semibold">Hướng dẫn</p>
                                <li className="mt-2.5 ng-star-inserted"><a className="hover:text-stone-400 mt-2"
                                                                           href="">Báo giá &amp; hỗ trợ</a></li>
                                <li className="mt-2.5 ng-star-inserted"><a className="hover:text-stone-400 mt-2"
                                                                           href="">Câu hỏi thường gặp</a></li>
                                <li className="mt-2.5 ng-star-inserted"><a className="hover:text-stone-400 mt-2"
                                                                           href="">Thông báo</a></li>
                                <li className="mt-2.5 ng-star-inserted"><a className="hover:text-stone-400 mt-2"
                                                                           href="">Liên hệ</a></li>
                                <li className="mt-2.5 ng-star-inserted"><a className="hover:text-stone-400 mt-2"
                                                                           href="">Sitemap</a></li>
                            </ul>
                            <ul className="w-1/4 hidden md:block"><p className="uppercase font-semibold">Quy định</p>
                                <li className="mt-2.5 ng-star-inserted"><a className="hover:text-stone-400 mt-2"
                                                                           href="">Quy định đăng tin</a></li>
                                <li className="mt-2.5 ng-star-inserted"><a className="hover:text-stone-400 mt-2"
                                                                           href="">Quy chế hoạt động</a></li>
                                <li className="mt-2.5 ng-star-inserted"><a className="hover:text-stone-400 mt-2"
                                                                           href="">Điều khoản thỏa thuận</a></li>
                                <li className="mt-2.5 ng-star-inserted"><a className="hover:text-stone-400 mt-2"
                                                                           href="">Chính sách bảo mật</a></li>
                                <li className="mt-2.5 ng-star-inserted"><a className="hover:text-stone-400 mt-2"
                                                                           href="">Giải quyết khiếu nại</a></li>
                                <li className="mt-2.5 ng-star-inserted"><a className="hover:text-stone-400 mt-2"
                                                                           href="">Góp ý báo lỗi</a></li>
                            </ul>
                            <div className="w-2/4 hidden md:block pb-7">
                                <div className="relative max-w-[358px]"><p className="font-semibold mb-3.5">ĐĂNG KÝ NHẬN
                                    TIN</p><input placeholder="Nhập email của bạn"
                                                  className="block w-full mr-5 px-4 py-3 text-sm text-gray-900 border border-stone-300 hover:border-black focus:border-black rounded-lg bg-gray-50 outline-none"/>
                                    <button type="submit"
                                            className="text-white absolute right-2 top-[51%] border bg-red-500 font-medium rounded-lg text-sm p-2 hover:bg-red-400">
                                        <img src="https://anphuocland.com/assets/icons/footer/share.svg" alt=""
                                             className="w-4"/></button>
                                </div>
                                <div><p className="font-semibold mt-5 mb-3.5">QUỐC GIA &amp; NGÔN NGỮ</p>
                                    <button
                                        className="ant-dropdown-trigger flex items-center gap-x-2 bg-white border border-gray-300 hover:border-black rounded-md px-3.5 py-2">
                                        <img src="https://anphuocland.com/assets/icons/footer/internet.svg" alt=""
                                             className="w-4"/> Việt
                                        Nam <span className="anticon ml-6 anticon-down"><svg
                                        viewBox="64 64 896 896" focusable="false" fill="currentColor"
                                        width="1em" height="1em" data-icon="down" aria-hidden="true"><path
                                        d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:hidden border-gray-400 py-4">
                    <div className="flex justify-between items-center gap-x-2 cursor-pointer pr-1"><p
                        className="font-semibold lg:font-normal uppercase">Hướng dẫn</p><img
                        src="https://anphuocland.com/assets/icons/footer/right-chevron.svg" alt="" className="w-1.5"/>
                    </div>
                </div>
                <div className="md:hidden border-t border-gray-400 py-4">
                    <div className="flex justify-between items-center gap-x-2 cursor-pointer pr-1"><p
                        className="font-semibold lg:font-normal uppercase">Quy định</p><img
                        src="https://anphuocland.com/assets/icons/footer/right-chevron.svg" alt="" className="w-1.5"/>
                    </div>
                </div>
                <div className="w-full md:w-2/4 md:hidden justify-between flex flex-wrap border-b border-gray-400 pb-7">
                    <div className="relative w-2/4 min-w-[300px] mr-3"><p className="font-semibold mt-5 mb-3.5">ĐĂNG KÝ
                        NHẬN TIN</p><input placeholder="Nhập email của bạn"
                                           className="block w-full mr-5 px-4 py-3 text-gray-900 border border-stone-300 hover:border-black focus:border-black rounded-lg bg-gray-50 outline-none"/>
                        <button type="submit"
                                className="text-white absolute right-2 top-[60%] border bg-red-500 font-medium rounded-lg text-sm p-2 hover:bg-red-400">
                            <img src="https://anphuocland.com/assets/icons/footer/share.svg" alt="" className="w-4"/>
                        </button>
                    </div>
                    <div><p className="font-semibold mt-5 mb-3.5">QUỐC GIA &amp; NGÔN NGỮ</p>
                        <button
                            className="ant-dropdown-trigger flex items-center gap-x-2 bg-white border border-gray-300 hover:border-black rounded-md px-3.5 py-3">
                            <img src="https://anphuocland.com/assets/icons/footer/internet.svg" alt=""
                                 className="w-4"/> Việt Nam <span
                            className="anticon ml-6 anticon-down"><svg
                            viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em"
                            data-icon="down" aria-hidden="true"><path
                            d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></span>
                        </button>
                    </div>
                </div>
            </section>

        </div>
    )
}