"use client";

import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MainContent = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
  });
  const AddProduct = async () => {
    const { name, description, price } = productData;
    try {
      const response = await axios.post(
        `http://localhost:8000/products/product`,
        { name, description, price }
      );
      if (response.status === 202) {
        toast.success("Product added", { autoClose: 1000 });
      }
    } catch (error) {}
  };
  return (
    <main>
      <div
        style={{
          backgroundImage: `url(https://s3-alpha-sig.figma.com/img/3708/a364/2cc93e10c62fdcfbc65fcc2ebd1c8aac?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mkr~BM8SrxlS6Qn0WwA~5lt7ZaEgY8Ssr~dYmHi5VtyDQvpB7B8YsmaSaaulbE5TuTylklhjiGloOnxJTrYWtkJdQQxbWdw6ac5PBbnVlWkNirMAF6cGGjk3YBMH9P9eqmbULF9ur4fEQOuD-RGG-oiyqG-fBdUIHFJ~IBMU72Tfuv0iKRsY0TBOrIj0cw4qyAw-e4qgztf346~JzfcitLNY5SzX4wRn69aBMEp-Qk-gi3~okx2EIEWM~mk8jIIKCiAwKmNRRYBSXxvzS3v9Xshp3JQvJbsccq4n41qJAvxqd77KlZtxWoCvv2l1VLmIeqIaE4Z~WuWqkcGeX2yzrw__)`,
        }}
        className="w-full h-[469px] flex flex-col headerPic justify-end pl-80 pb-5"
      >
        <h1 className="text-[18px]">Wildflower Hoodie </h1>
        <p className="text-[36px]">
          <strong>120 000₮</strong>
        </p>
      </div>
      <div className="grid grid-rows-6 grid-cols-4 gap-4 w-[1038px] h-[2400px] m-auto my-10 ">
        <div className="subPic">
          {/* <h1>The Prompt Magazine</h1>
          <p className="text-">
            <strong>120 000₮</strong>
          </p> */}
          <div className="card bg-base-100 w-[247px] h-[386px] rounded-2xl shadow-xl">
            <figure>
              <img
                src="https://s3-alpha-sig.figma.com/img/00a8/58db/dfc54f4f631ad7c6f0421f3fa722a566?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrrJOl0issFa7HGGhJO8p80HZ~md-oV7Q36~JrAwkkE~hgwp4WrF~vVtxsnTJgYExXbDe-AE9l3n~vsPSv~MIjUAe0fjcsi7jnrC0k86EWntoGABvYp9Tl6i6sBoFDrnu6zVEsKLgjsT~dw4Cln6w1fd-F5dkcJ~OfRC5O6eSjnK9jVEqWu64cP3~B-iFDscLTNrIwiuLGGM5dRaYreOztKAJtdA0RalItcxA8JROdiRAwfV4pcL2BejQlgyrJYXbvDHuyMux3WxjS8kCjuxUum8ljTfl~MsgfN0Ovvic~5vvZMBqswu0cRQ3mtVj057gPwiHPjNGSNrhDsq3ada6Q__"
                alt="Shoes"
                className="rounded-2xl h-[320px]"
              />
            </figure>
            <div className="card-body pl-5 text-[20px]">
              <h2 className="card-title ">The Prompt Magazine</h2>
              <p>
                <strong>120 000₮</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="subPic">
          {" "}
          <div className="card bg-base-100 w-[247px] h-[386px] rounded-2xl shadow-xl">
            <figure>
              <img
                src="https://s3-alpha-sig.figma.com/img/00a8/58db/dfc54f4f631ad7c6f0421f3fa722a566?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrrJOl0issFa7HGGhJO8p80HZ~md-oV7Q36~JrAwkkE~hgwp4WrF~vVtxsnTJgYExXbDe-AE9l3n~vsPSv~MIjUAe0fjcsi7jnrC0k86EWntoGABvYp9Tl6i6sBoFDrnu6zVEsKLgjsT~dw4Cln6w1fd-F5dkcJ~OfRC5O6eSjnK9jVEqWu64cP3~B-iFDscLTNrIwiuLGGM5dRaYreOztKAJtdA0RalItcxA8JROdiRAwfV4pcL2BejQlgyrJYXbvDHuyMux3WxjS8kCjuxUum8ljTfl~MsgfN0Ovvic~5vvZMBqswu0cRQ3mtVj057gPwiHPjNGSNrhDsq3ada6Q__"
                alt="Shoes"
                className="rounded-2xl h-[320px]"
              />
            </figure>
            <div className="card-body pl-5 text-[20px]">
              <h2 className="card-title ">The Prompt Magazine</h2>
              <p>
                <strong>120 000₮</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="subPic">
          {" "}
          <div className="card bg-base-100 w-[247px] h-[386px] rounded-2xl shadow-xl">
            <figure>
              <img
                src="https://s3-alpha-sig.figma.com/img/00a8/58db/dfc54f4f631ad7c6f0421f3fa722a566?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrrJOl0issFa7HGGhJO8p80HZ~md-oV7Q36~JrAwkkE~hgwp4WrF~vVtxsnTJgYExXbDe-AE9l3n~vsPSv~MIjUAe0fjcsi7jnrC0k86EWntoGABvYp9Tl6i6sBoFDrnu6zVEsKLgjsT~dw4Cln6w1fd-F5dkcJ~OfRC5O6eSjnK9jVEqWu64cP3~B-iFDscLTNrIwiuLGGM5dRaYreOztKAJtdA0RalItcxA8JROdiRAwfV4pcL2BejQlgyrJYXbvDHuyMux3WxjS8kCjuxUum8ljTfl~MsgfN0Ovvic~5vvZMBqswu0cRQ3mtVj057gPwiHPjNGSNrhDsq3ada6Q__"
                alt="Shoes"
                className="rounded-2xl h-[320px]"
              />
            </figure>
            <div className="card-body pl-5 text-[20px]">
              <h2 className="card-title ">The Prompt Magazine</h2>
              <p>
                <strong>120 000₮</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="subPic">
          {" "}
          <div className="card bg-base-100 w-[247px] h-[386px] rounded-2xl shadow-xl">
            <figure>
              <img
                src="https://s3-alpha-sig.figma.com/img/00a8/58db/dfc54f4f631ad7c6f0421f3fa722a566?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrrJOl0issFa7HGGhJO8p80HZ~md-oV7Q36~JrAwkkE~hgwp4WrF~vVtxsnTJgYExXbDe-AE9l3n~vsPSv~MIjUAe0fjcsi7jnrC0k86EWntoGABvYp9Tl6i6sBoFDrnu6zVEsKLgjsT~dw4Cln6w1fd-F5dkcJ~OfRC5O6eSjnK9jVEqWu64cP3~B-iFDscLTNrIwiuLGGM5dRaYreOztKAJtdA0RalItcxA8JROdiRAwfV4pcL2BejQlgyrJYXbvDHuyMux3WxjS8kCjuxUum8ljTfl~MsgfN0Ovvic~5vvZMBqswu0cRQ3mtVj057gPwiHPjNGSNrhDsq3ada6Q__"
                alt="Shoes"
                className="rounded-2xl h-[320px]"
              />
            </figure>
            <div className="card-body pl-5 text-[20px]">
              <h2 className="card-title ">The Prompt Magazine</h2>
              <p>
                <strong>120 000₮</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="subPic">
          {" "}
          <div className="card bg-base-100 w-[247px] h-[386px] rounded-2xl shadow-xl">
            <figure>
              <img
                src="https://s3-alpha-sig.figma.com/img/00a8/58db/dfc54f4f631ad7c6f0421f3fa722a566?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrrJOl0issFa7HGGhJO8p80HZ~md-oV7Q36~JrAwkkE~hgwp4WrF~vVtxsnTJgYExXbDe-AE9l3n~vsPSv~MIjUAe0fjcsi7jnrC0k86EWntoGABvYp9Tl6i6sBoFDrnu6zVEsKLgjsT~dw4Cln6w1fd-F5dkcJ~OfRC5O6eSjnK9jVEqWu64cP3~B-iFDscLTNrIwiuLGGM5dRaYreOztKAJtdA0RalItcxA8JROdiRAwfV4pcL2BejQlgyrJYXbvDHuyMux3WxjS8kCjuxUum8ljTfl~MsgfN0Ovvic~5vvZMBqswu0cRQ3mtVj057gPwiHPjNGSNrhDsq3ada6Q__"
                alt="Shoes"
                className="rounded-2xl h-[320px]"
              />
            </figure>
            <div className="card-body pl-5 text-[20px]">
              <h2 className="card-title ">The Prompt Magazine</h2>
              <p>
                <strong>120 000₮</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="subPic">
          {" "}
          <div className="card bg-base-100 w-[247px] h-[386px] rounded-2xl shadow-xl">
            <figure>
              <img
                src="https://s3-alpha-sig.figma.com/img/00a8/58db/dfc54f4f631ad7c6f0421f3fa722a566?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrrJOl0issFa7HGGhJO8p80HZ~md-oV7Q36~JrAwkkE~hgwp4WrF~vVtxsnTJgYExXbDe-AE9l3n~vsPSv~MIjUAe0fjcsi7jnrC0k86EWntoGABvYp9Tl6i6sBoFDrnu6zVEsKLgjsT~dw4Cln6w1fd-F5dkcJ~OfRC5O6eSjnK9jVEqWu64cP3~B-iFDscLTNrIwiuLGGM5dRaYreOztKAJtdA0RalItcxA8JROdiRAwfV4pcL2BejQlgyrJYXbvDHuyMux3WxjS8kCjuxUum8ljTfl~MsgfN0Ovvic~5vvZMBqswu0cRQ3mtVj057gPwiHPjNGSNrhDsq3ada6Q__"
                alt="Shoes"
                className="rounded-2xl h-[320px]"
              />
            </figure>
            <div className="card-body pl-5 text-[20px]">
              <h2 className="card-title ">The Prompt Magazine</h2>
              <p>
                <strong>120 000₮</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="row-span-2 col-span-2 subPic">
          {" "}
          <div className="card bg-base-100 w-[511px] h-[788px] rounded-2xl shadow-xl">
            <figure>
              <img
                src="https://s3-alpha-sig.figma.com/img/00a8/58db/dfc54f4f631ad7c6f0421f3fa722a566?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrrJOl0issFa7HGGhJO8p80HZ~md-oV7Q36~JrAwkkE~hgwp4WrF~vVtxsnTJgYExXbDe-AE9l3n~vsPSv~MIjUAe0fjcsi7jnrC0k86EWntoGABvYp9Tl6i6sBoFDrnu6zVEsKLgjsT~dw4Cln6w1fd-F5dkcJ~OfRC5O6eSjnK9jVEqWu64cP3~B-iFDscLTNrIwiuLGGM5dRaYreOztKAJtdA0RalItcxA8JROdiRAwfV4pcL2BejQlgyrJYXbvDHuyMux3WxjS8kCjuxUum8ljTfl~MsgfN0Ovvic~5vvZMBqswu0cRQ3mtVj057gPwiHPjNGSNrhDsq3ada6Q__"
                alt="Shoes"
                className="rounded-2xl w-[511px] h-[715px]"
              />
            </figure>
            <div className="card-body pl-5 text-[20px]">
              <h2 className="card-title ">The Prompt Magazine</h2>
              <p>
                <strong>120 000₮</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="row-span-2 col-span-2 subPic">
          {" "}
          <div className="card bg-base-100 w-[511px] h-[780px] rounded-2xl shadow-xl">
            <figure>
              <img
                src="https://s3-alpha-sig.figma.com/img/00a8/58db/dfc54f4f631ad7c6f0421f3fa722a566?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrrJOl0issFa7HGGhJO8p80HZ~md-oV7Q36~JrAwkkE~hgwp4WrF~vVtxsnTJgYExXbDe-AE9l3n~vsPSv~MIjUAe0fjcsi7jnrC0k86EWntoGABvYp9Tl6i6sBoFDrnu6zVEsKLgjsT~dw4Cln6w1fd-F5dkcJ~OfRC5O6eSjnK9jVEqWu64cP3~B-iFDscLTNrIwiuLGGM5dRaYreOztKAJtdA0RalItcxA8JROdiRAwfV4pcL2BejQlgyrJYXbvDHuyMux3WxjS8kCjuxUum8ljTfl~MsgfN0Ovvic~5vvZMBqswu0cRQ3mtVj057gPwiHPjNGSNrhDsq3ada6Q__"
                alt="Shoes"
                className="rounded-2xl w-[511px] h-[715px]"
              />
            </figure>
            <div className="card-body pl-5 text-[20px]">
              <h2 className="card-title ">The Prompt Magazine</h2>
              <p>
                <strong>120 000₮</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="subPic">
          {" "}
          <div className="card bg-base-100 w-[247px] h-[386px] rounded-2xl shadow-xl">
            <figure>
              <img
                src="https://s3-alpha-sig.figma.com/img/00a8/58db/dfc54f4f631ad7c6f0421f3fa722a566?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrrJOl0issFa7HGGhJO8p80HZ~md-oV7Q36~JrAwkkE~hgwp4WrF~vVtxsnTJgYExXbDe-AE9l3n~vsPSv~MIjUAe0fjcsi7jnrC0k86EWntoGABvYp9Tl6i6sBoFDrnu6zVEsKLgjsT~dw4Cln6w1fd-F5dkcJ~OfRC5O6eSjnK9jVEqWu64cP3~B-iFDscLTNrIwiuLGGM5dRaYreOztKAJtdA0RalItcxA8JROdiRAwfV4pcL2BejQlgyrJYXbvDHuyMux3WxjS8kCjuxUum8ljTfl~MsgfN0Ovvic~5vvZMBqswu0cRQ3mtVj057gPwiHPjNGSNrhDsq3ada6Q__"
                alt="Shoes"
                className="rounded-2xl h-[320px]"
              />
            </figure>
            <div className="card-body pl-5 text-[20px]">
              <h2 className="card-title ">The Prompt Magazine</h2>
              <p>
                <strong>120 000₮</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="subPic">
          {" "}
          <div className="card bg-base-100 w-[247px] h-[386px] rounded-2xl shadow-xl">
            <figure>
              <img
                src="https://s3-alpha-sig.figma.com/img/00a8/58db/dfc54f4f631ad7c6f0421f3fa722a566?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrrJOl0issFa7HGGhJO8p80HZ~md-oV7Q36~JrAwkkE~hgwp4WrF~vVtxsnTJgYExXbDe-AE9l3n~vsPSv~MIjUAe0fjcsi7jnrC0k86EWntoGABvYp9Tl6i6sBoFDrnu6zVEsKLgjsT~dw4Cln6w1fd-F5dkcJ~OfRC5O6eSjnK9jVEqWu64cP3~B-iFDscLTNrIwiuLGGM5dRaYreOztKAJtdA0RalItcxA8JROdiRAwfV4pcL2BejQlgyrJYXbvDHuyMux3WxjS8kCjuxUum8ljTfl~MsgfN0Ovvic~5vvZMBqswu0cRQ3mtVj057gPwiHPjNGSNrhDsq3ada6Q__"
                alt="Shoes"
                className="rounded-2xl h-[320px]"
              />
            </figure>
            <div className="card-body pl-5 text-[20px]">
              <h2 className="card-title ">The Prompt Magazine</h2>
              <p>
                <strong>120 000₮</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="subPic">
          {" "}
          <div className="card bg-base-100 w-[247px] h-[386px] rounded-2xl shadow-xl">
            <figure>
              <img
                src="https://s3-alpha-sig.figma.com/img/00a8/58db/dfc54f4f631ad7c6f0421f3fa722a566?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrrJOl0issFa7HGGhJO8p80HZ~md-oV7Q36~JrAwkkE~hgwp4WrF~vVtxsnTJgYExXbDe-AE9l3n~vsPSv~MIjUAe0fjcsi7jnrC0k86EWntoGABvYp9Tl6i6sBoFDrnu6zVEsKLgjsT~dw4Cln6w1fd-F5dkcJ~OfRC5O6eSjnK9jVEqWu64cP3~B-iFDscLTNrIwiuLGGM5dRaYreOztKAJtdA0RalItcxA8JROdiRAwfV4pcL2BejQlgyrJYXbvDHuyMux3WxjS8kCjuxUum8ljTfl~MsgfN0Ovvic~5vvZMBqswu0cRQ3mtVj057gPwiHPjNGSNrhDsq3ada6Q__"
                alt="Shoes"
                className="rounded-2xl h-[320px]"
              />
            </figure>
            <div className="card-body pl-5 text-[20px]">
              <h2 className="card-title ">The Prompt Magazine</h2>
              <p>
                <strong>120 000₮</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="subPic">
          {" "}
          <div className="card bg-base-100 w-[247px] h-[386px] rounded-2xl shadow-xl">
            <figure>
              <img
                src="https://s3-alpha-sig.figma.com/img/00a8/58db/dfc54f4f631ad7c6f0421f3fa722a566?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrrJOl0issFa7HGGhJO8p80HZ~md-oV7Q36~JrAwkkE~hgwp4WrF~vVtxsnTJgYExXbDe-AE9l3n~vsPSv~MIjUAe0fjcsi7jnrC0k86EWntoGABvYp9Tl6i6sBoFDrnu6zVEsKLgjsT~dw4Cln6w1fd-F5dkcJ~OfRC5O6eSjnK9jVEqWu64cP3~B-iFDscLTNrIwiuLGGM5dRaYreOztKAJtdA0RalItcxA8JROdiRAwfV4pcL2BejQlgyrJYXbvDHuyMux3WxjS8kCjuxUum8ljTfl~MsgfN0Ovvic~5vvZMBqswu0cRQ3mtVj057gPwiHPjNGSNrhDsq3ada6Q__"
                alt="Shoes"
                className="rounded-2xl h-[320px]"
              />
            </figure>
            <div className="card-body pl-5 text-[20px]">
              <h2 className="card-title ">The Prompt Magazine</h2>
              <p>
                <strong>120 000₮</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="subPic">
          {" "}
          <div className="card bg-base-100 w-[247px] h-[386px] rounded-2xl shadow-xl">
            <figure>
              <img
                src="https://s3-alpha-sig.figma.com/img/00a8/58db/dfc54f4f631ad7c6f0421f3fa722a566?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrrJOl0issFa7HGGhJO8p80HZ~md-oV7Q36~JrAwkkE~hgwp4WrF~vVtxsnTJgYExXbDe-AE9l3n~vsPSv~MIjUAe0fjcsi7jnrC0k86EWntoGABvYp9Tl6i6sBoFDrnu6zVEsKLgjsT~dw4Cln6w1fd-F5dkcJ~OfRC5O6eSjnK9jVEqWu64cP3~B-iFDscLTNrIwiuLGGM5dRaYreOztKAJtdA0RalItcxA8JROdiRAwfV4pcL2BejQlgyrJYXbvDHuyMux3WxjS8kCjuxUum8ljTfl~MsgfN0Ovvic~5vvZMBqswu0cRQ3mtVj057gPwiHPjNGSNrhDsq3ada6Q__"
                alt="Shoes"
                className="rounded-2xl h-[320px]"
              />
            </figure>
            <div className="card-body pl-5 text-[20px]">
              <h2 className="card-title ">The Prompt Magazine</h2>
              <p>
                <strong>120 000₮</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="subPic">
          {" "}
          <div className="card bg-base-100 w-[247px] h-[386px] rounded-2xl shadow-xl">
            <figure>
              <img
                src="https://s3-alpha-sig.figma.com/img/00a8/58db/dfc54f4f631ad7c6f0421f3fa722a566?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrrJOl0issFa7HGGhJO8p80HZ~md-oV7Q36~JrAwkkE~hgwp4WrF~vVtxsnTJgYExXbDe-AE9l3n~vsPSv~MIjUAe0fjcsi7jnrC0k86EWntoGABvYp9Tl6i6sBoFDrnu6zVEsKLgjsT~dw4Cln6w1fd-F5dkcJ~OfRC5O6eSjnK9jVEqWu64cP3~B-iFDscLTNrIwiuLGGM5dRaYreOztKAJtdA0RalItcxA8JROdiRAwfV4pcL2BejQlgyrJYXbvDHuyMux3WxjS8kCjuxUum8ljTfl~MsgfN0Ovvic~5vvZMBqswu0cRQ3mtVj057gPwiHPjNGSNrhDsq3ada6Q__"
                alt="Shoes"
                className="rounded-2xl h-[320px]"
              />
            </figure>
            <div className="card-body pl-5 text-[20px]">
              <h2 className="card-title ">The Prompt Magazine</h2>
              <p>
                <strong>120 000₮</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="subPic">
          {" "}
          <div className="card bg-base-100 w-[247px] h-[386px] rounded-2xl shadow-xl">
            <figure>
              <img
                src="https://s3-alpha-sig.figma.com/img/00a8/58db/dfc54f4f631ad7c6f0421f3fa722a566?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrrJOl0issFa7HGGhJO8p80HZ~md-oV7Q36~JrAwkkE~hgwp4WrF~vVtxsnTJgYExXbDe-AE9l3n~vsPSv~MIjUAe0fjcsi7jnrC0k86EWntoGABvYp9Tl6i6sBoFDrnu6zVEsKLgjsT~dw4Cln6w1fd-F5dkcJ~OfRC5O6eSjnK9jVEqWu64cP3~B-iFDscLTNrIwiuLGGM5dRaYreOztKAJtdA0RalItcxA8JROdiRAwfV4pcL2BejQlgyrJYXbvDHuyMux3WxjS8kCjuxUum8ljTfl~MsgfN0Ovvic~5vvZMBqswu0cRQ3mtVj057gPwiHPjNGSNrhDsq3ada6Q__"
                alt="Shoes"
                className="rounded-2xl h-[320px]"
              />
            </figure>
            <div className="card-body pl-5 text-[20px]">
              <h2 className="card-title ">The Prompt Magazine</h2>
              <p>
                <strong>120 000₮</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="subPic">
          {" "}
          <div className="card bg-base-100 w-[247px] h-[386px] rounded-2xl shadow-xl">
            <figure>
              <img
                src="https://s3-alpha-sig.figma.com/img/00a8/58db/dfc54f4f631ad7c6f0421f3fa722a566?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrrJOl0issFa7HGGhJO8p80HZ~md-oV7Q36~JrAwkkE~hgwp4WrF~vVtxsnTJgYExXbDe-AE9l3n~vsPSv~MIjUAe0fjcsi7jnrC0k86EWntoGABvYp9Tl6i6sBoFDrnu6zVEsKLgjsT~dw4Cln6w1fd-F5dkcJ~OfRC5O6eSjnK9jVEqWu64cP3~B-iFDscLTNrIwiuLGGM5dRaYreOztKAJtdA0RalItcxA8JROdiRAwfV4pcL2BejQlgyrJYXbvDHuyMux3WxjS8kCjuxUum8ljTfl~MsgfN0Ovvic~5vvZMBqswu0cRQ3mtVj057gPwiHPjNGSNrhDsq3ada6Q__"
                alt="Shoes"
                className="rounded-2xl h-[320px]"
              />
            </figure>
            <div className="card-body pl-5 text-[20px]">
              <h2 className="card-title ">The Prompt Magazine</h2>
              <p>
                <strong>120 000₮</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="subPic">
          {" "}
          <div className="card bg-base-100 w-[247px] h-[386px] rounded-2xl shadow-xl">
            <figure>
              <img
                src="https://s3-alpha-sig.figma.com/img/00a8/58db/dfc54f4f631ad7c6f0421f3fa722a566?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrrJOl0issFa7HGGhJO8p80HZ~md-oV7Q36~JrAwkkE~hgwp4WrF~vVtxsnTJgYExXbDe-AE9l3n~vsPSv~MIjUAe0fjcsi7jnrC0k86EWntoGABvYp9Tl6i6sBoFDrnu6zVEsKLgjsT~dw4Cln6w1fd-F5dkcJ~OfRC5O6eSjnK9jVEqWu64cP3~B-iFDscLTNrIwiuLGGM5dRaYreOztKAJtdA0RalItcxA8JROdiRAwfV4pcL2BejQlgyrJYXbvDHuyMux3WxjS8kCjuxUum8ljTfl~MsgfN0Ovvic~5vvZMBqswu0cRQ3mtVj057gPwiHPjNGSNrhDsq3ada6Q__"
                alt="Shoes"
                className="rounded-2xl h-[320px]"
              />
            </figure>
            <div className="card-body pl-5 text-[20px]">
              <h2 className="card-title ">The Prompt Magazine</h2>
              <p>
                <strong>120 000₮</strong>
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="subPic">
          {" "}
          <div className="card bg-base-100 w-[247px] h-[386px] rounded-2xl shadow-xl">
            <figure>
              <img
                src="https://s3-alpha-sig.figma.com/img/00a8/58db/dfc54f4f631ad7c6f0421f3fa722a566?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrrJOl0issFa7HGGhJO8p80HZ~md-oV7Q36~JrAwkkE~hgwp4WrF~vVtxsnTJgYExXbDe-AE9l3n~vsPSv~MIjUAe0fjcsi7jnrC0k86EWntoGABvYp9Tl6i6sBoFDrnu6zVEsKLgjsT~dw4Cln6w1fd-F5dkcJ~OfRC5O6eSjnK9jVEqWu64cP3~B-iFDscLTNrIwiuLGGM5dRaYreOztKAJtdA0RalItcxA8JROdiRAwfV4pcL2BejQlgyrJYXbvDHuyMux3WxjS8kCjuxUum8ljTfl~MsgfN0Ovvic~5vvZMBqswu0cRQ3mtVj057gPwiHPjNGSNrhDsq3ada6Q__"
                alt="Shoes"
                className="rounded-2xl h-[320px]"
              />
            </figure>
            <div className="card-body pl-5 text-[20px]">
              <h2 className="card-title ">The Prompt Magazine</h2>
              <p>
                <strong>120 000₮</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
