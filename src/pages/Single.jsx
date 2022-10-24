import React from "react";
import { Icon } from "@iconify/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Crumb3 from "../components/Crumb3";
import Singleimg from "../assets/singleimg.png";
import Sel from "../assets/select.png";
import Simg1 from "../assets/simg1.png";
import Simg2 from "../assets/simg2.png";
import Simg3 from "../assets/simg3.png";
import Simg4 from "../assets/simg4.png";

const Single = () => {
  return (
    <div>
      {/* <Navbar /> */}

      {/* crumbs */}
      <Crumb3 name="Water" name2="Table Water - 75cl (On the Go)" />

      {/* top main section */}
      <section className="mx-10 md:mx-24">
        <div className="flex flex-col md:flex-row gap-10">
          {/* left */}
          <div className="border p-6 rounded-2xl flex flex-col gap-16 flex-1">
            <Icon icon="akar-icons:search" className="self-end" />
            <div className="self-center">
              <img src={Singleimg} alt="main img" className="" />
            </div>
          </div>

          {/* right */}
          <div className="flex-[1]">
            <span className="text-blue bg-[#5D84C133] p-2 rounded-lg text-sm font-semibold">
              In Stock
            </span>

            <h1 className="text-darkblue font-bold text-3xl mt-4">
              Table Water - 75cl (On the Go)
            </h1>

            <div className="flex gap-2 items-center my-8">
              <div className="flex gap-1">
                <div className="text-yellow-400">
                  <Icon icon="ant-design:star-filled" />
                </div>

                <div className="text-yellow-400">
                  <Icon icon="ant-design:star-filled" />
                </div>

                <div className="text-yellow-400">
                  <Icon icon="ant-design:star-filled" />
                </div>

                <div className="text-yellow-400">
                  <Icon icon="ant-design:star-filled" />
                </div>

                <div className="text-gray-300">
                  <Icon icon="ant-design:star-filled" />
                </div>
              </div>
              <p className="text-sm text-gray-400">(4.0)</p>
            </div>
            <div className="flex gap-12 items-end">
              <h1 className="text-blue font-bold text-6xl">N700</h1>
              <h3 className="line-through text-gray-400 font-semibold text-xl">
                N750
              </h3>
            </div>

            <p className="text-gray-400 text-base my-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              rem officia, corrupti reiciendis minima nisi modi, quasi, odio
              <br />
              minus dolore impedit fuga eum eligendi? Officia doloremque facere
              quia. Voluptatum, accusantium! Uninhibited carnally hired played
              in whimpered dear gorilla koala depending and much yikes off far
              quetzal goodness and from for grimaced goodness.
            </p>

            <div className="flex gap-4">
              <div className="border-2 border-blue rounded-xl p-1 sm:p-3 flex items-center justify-center">
                <input
                  type="number"
                  placeholder="1"
                  className="placeholder:text-blue text-blue font-medium outline-none"
                  min="1"
                  max="100"
                />
              </div>

              <div className="">
                <button className="flex items-center justify-center bg-blue text-white rounded-md text-sm sm:text-lg font-medium p-1 sm:p-3 w-full gap-2 sm:gap-4 border-[2px] border-blue hover:bg-transparent hover:text-blue">
                  <Icon icon="bi:cart" /> Add To Cart
                </button>
              </div>

              <div className="border text-gray-400 py-2 px-4 font-semibold text-base flex items-center justify-center rounded-md">
                <Icon icon="akar-icons:heart" />
              </div>
            </div>

            <div className="mt-10">
              <p className="text-base text-gray-400">
                <span className="font-medium text-black">SKU:</span> FWM15VKT
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5 my-10">
          <div className="bg-gray-300 w-10 h-10 hover:bg-blue flex items-center justify-center text-gray-500 hover:text-white rounded-full cursor-pointer">
            <Icon icon="akar-icons:arrow-left" />
          </div>
          <div className="flex gap-4">
            <div className="border-blue border p-1 flex justify-center items-center sm:p-5 rounded-xl cursor-pointer">
              <img src={Sel} alt="" />
            </div>
            <div className="border-gray-300 border p-1 sm:p-5 rounded-xl cursor-pointer">
              <img src={Sel} alt="" />
            </div>
            <div className="border-gray-300 border p-1 sm:p-5 rounded-xl cursor-pointer">
              <img src={Sel} alt="" />
            </div>
            <div className="border-gray-300 border p-1 sm:p-5 rounded-xl cursor-pointer">
              <img src={Sel} alt="" />
            </div>
          </div>
          <div className="bg-gray-300 w-10 h-10 hover:bg-blue flex items-center justify-center text-gray-500 hover:text-white rounded-full cursor-pointer">
            <Icon icon="akar-icons:arrow-right" />
          </div>
        </div>
      </section>

      {/* description section */}
      <section className="mx-12 lg:mx-44">
        <div className="border border-gray-300 rounded-lg py-2 px-4">
          <div className="mb-8 mt-5">
            <span className="text-blue shadow-xl px-4 py-2 bg-white text-base font-medium rounded-xl">
              Description
            </span>
          </div>

          <div className="">
            <p className="text-sm text-gray-400">
              Uninhibited carnally hired played in whimpered dear gorilla koala
              depending and much yikes off far quetzal goodness and from for
              grimaced goodness unaccountably and meadowlark near unblushingly
              crucial scallop tightly neurotic hungrily some and dear furiously
              this apart. Spluttered narrowly yikes left moth in yikes bowed
              this that grizzly much hello on spoon-fed that alas rethought much
              decently richly and wow against the frequent fluidly at formidable
              acceptably flapped besides and much circa far over the bucolically
              hey precarious goldfinch mastodon goodness gnashed a jellyfish and
              one however because.{" "}
            </p>
          </div>

          {/* packaging and delivery */}
          <div className="my-8">
            <h2 className="text-darkblue font-bold text-xl">
              Packaging & Delivery
            </h2>

            <p className="text-sm text-gray-400 my-5">
              Less lion goodness that euphemistically robin expeditiously
              bluebird smugly scratched far while thus cackled sheepishly rigid
              after due one assenting regarding censorious while occasional or
              this more crane went more as this less much amid overhung
              anathematic because much held one exuberantly sheep goodness so
              where rat wry well concomitantly.
            </p>

            <div className="flex gap-8 ml-2">
              <div className="">
                <ul className="list-inside list-disc flex flex-col gap-4 text-gray-400 text-sm">
                  <li>Type Of Packing</li>
                  <li>Color</li>
                  <li>Quantity Per Case</li>
                  <li>Fat percentage</li>
                  <li>Piece In One</li>
                </ul>
              </div>

              <div className="">
                <ul className="list-inside flex flex-col gap-4 text-gray-400 text-sm">
                  <li>Paper wrapping</li>
                  <li>Green, Pink, Brown</li>
                  <li>500g</li>
                  <li>56%</li>
                  <li>Carton</li>
                </ul>
              </div>
            </div>

            <div className="my-8">
              <h2 className="text-darkblue font-bold text-xl ">
                Suggested Use
              </h2>
              <p className="text-sm text-gray-400 my-5">
                Refrigeration not necessary. Stir before serving
              </p>
            </div>

            <div className="my-8">
              <h2 className="text-darkblue font-bold text-xl ">
                Other Ingredients
              </h2>
              <p className="text-sm text-gray-400 my-5">
                Organic raw pecans, organic raw cashews. This butter was
                produced using a LTG (Low Temperature Grinding) process. Made in
                machinery that processes tree nuts but does not process peanuts,
                gluten, dairy or soy.
              </p>
            </div>

            <div className="my-8">
              <h2 className="text-darkblue font-bold text-xl ">Warnings</h2>
              <p className="text-sm text-gray-400 my-5">
                Oil separation occurs naturally. May contain pieces of shell.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-darkblue text-2xl font-bold my-12">
            Related products
          </h2>

          {/* cards */}
          <div className="flex flex-wrap gap-3">
            {/* card */}
            <div className="border-[2px] rounded-xl flex flex-col justify-end">
              <div className="text-white bg-lightRed text-lg self-end rounded-l-full py-2 px-6 my-8">
                20%
              </div>

              <img
                src={Simg1}
                alt="card image"
                className="my-5 self-center h-[200px]"
              />

              <div className="p-5">
                <div className="">
                  <p className="text-sm text-gray-500">Dispenser</p>

                  <h4 className="text-2xl font-semibold truncate flex justify-between">
                    Ruby 6F - BYB53
                    <Icon icon="akar-icons:heart" className="text-blue" />
                  </h4>
                </div>
                <div className="mt-3">
                  <p className="text-sm text-gray-500">500 gram</p>
                  <div className=" flex gap-6 items-end">
                    <h2 className="text-2xl font-semibold text-blue">
                      N71,050.00
                    </h2>
                    <p className="line-through text-gray-400 font-medium text-lg">
                      N72,000.00
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center my-1">
                  <div className="flex gap-1">
                    <div className="text-yellow-400">
                      <Icon icon="ant-design:star-filled" />
                    </div>

                    <div className="text-yellow-400">
                      <Icon icon="ant-design:star-filled" />
                    </div>

                    <div className="text-yellow-400">
                      <Icon icon="ant-design:star-filled" />
                    </div>

                    <div className="text-yellow-400">
                      <Icon icon="ant-design:star-filled" />
                    </div>

                    <div className="text-gray-300">
                      <Icon icon="ant-design:star-filled" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">(4.0)</p>
                </div>
              </div>
            </div>
            {/* card */}
            <div className="border-[2px] rounded-xl flex flex-col justify-end">
              <div className="text-white bg-lightRed text-lg self-end rounded-l-full py-2 px-6 my-8">
                20%
              </div>

              <img
                src={Simg2}
                alt="card image"
                className="my-5 self-center h-[200px]"
              />

              <div className="p-5">
                <div className="">
                  <p className="text-sm text-gray-500">Water</p>

                  <h4 className="text-2xl font-semibold truncate flex justify-between">
                    Refill Water Ony
                    <Icon icon="akar-icons:heart" className="text-blue" />
                  </h4>
                </div>
                <div className="mt-3">
                  <p className="text-sm text-gray-500">500 gram</p>
                  <div className=" flex gap-6 items-end">
                    <h2 className="text-2xl font-semibold text-blue">
                      N650.00
                    </h2>
                    <p className="line-through text-gray-400 font-medium text-lg">
                      N750.00
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center my-1">
                  <div className="flex gap-1">
                    <div className="text-yellow-400">
                      <Icon icon="ant-design:star-filled" />
                    </div>

                    <div className="text-yellow-400">
                      <Icon icon="ant-design:star-filled" />
                    </div>

                    <div className="text-yellow-400">
                      <Icon icon="ant-design:star-filled" />
                    </div>

                    <div className="text-yellow-400">
                      <Icon icon="ant-design:star-filled" />
                    </div>

                    <div className="text-gray-300">
                      <Icon icon="ant-design:star-filled" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">(4.0)</p>
                </div>
              </div>
            </div>
            {/* card */}
            <div className="border-[2px] rounded-xl flex flex-col justify-end">
              <div className="text-white bg-lightRed text-lg self-end rounded-l-full py-2 px-6 my-8 justify-self-start">
                20%
              </div>

              <img
                src={Simg3}
                alt="card image"
                className="my-5 self-center h-[200px]"
              />

              <div className="p-5">
                <div className="">
                  <p className="text-sm text-gray-500">Water</p>

                  <h4 className="text-2xl font-semibold truncate flex justify-between">
                    Nutri Choco
                    <Icon icon="akar-icons:heart" className="text-blue" />
                  </h4>
                </div>
                <div className="mt-3">
                  <p className="text-sm text-gray-500">500 gram</p>
                  <div className=" flex gap-6 items-end">
                    <h2 className="text-2xl font-semibold text-blue">
                      N2,500.00
                    </h2>
                    <p className="line-through text-gray-400 font-medium text-lg">
                      N2,500.00
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center my-1">
                  <div className="flex gap-1">
                    <div className="text-yellow-400">
                      <Icon icon="ant-design:star-filled" />
                    </div>

                    <div className="text-yellow-400">
                      <Icon icon="ant-design:star-filled" />
                    </div>

                    <div className="text-yellow-400">
                      <Icon icon="ant-design:star-filled" />
                    </div>

                    <div className="text-yellow-400">
                      <Icon icon="ant-design:star-filled" />
                    </div>

                    <div className="text-gray-300">
                      <Icon icon="ant-design:star-filled" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">(4.0)</p>
                </div>
              </div>
            </div>
            {/* card */}
            <div className="border-[2px] rounded-xl flex flex-col justify-end">
              <img
                src={Simg4}
                alt="card image"
                className="my-5 self-center justify-self-end h-[200px]"
              />

              <div className="p-5  justify-self-end">
                <div className="">
                  <p className="text-sm text-gray-500">Beverage</p>

                  <h4 className="text-2xl font-semibold truncate flex justify-between">
                    Nutri Superkids Apple
                    <Icon icon="akar-icons:heart" className="text-blue" />
                  </h4>
                </div>
                <div className="mt-3">
                  <p className="text-sm text-gray-500">500 gram</p>
                  <div className=" ">
                    <h2 className="text-2xl font-semibold text-blue">
                      N2,050.00
                    </h2>
                  </div>
                </div>
                <div className="flex gap-2 items-center my-1">
                  <div className="flex gap-1">
                    <div className="text-yellow-400">
                      <Icon icon="ant-design:star-filled" />
                    </div>

                    <div className="text-yellow-400">
                      <Icon icon="ant-design:star-filled" />
                    </div>

                    <div className="text-yellow-400">
                      <Icon icon="ant-design:star-filled" />
                    </div>

                    <div className="text-yellow-400">
                      <Icon icon="ant-design:star-filled" />
                    </div>

                    <div className="text-gray-300">
                      <Icon icon="ant-design:star-filled" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">(4.0)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Single;
