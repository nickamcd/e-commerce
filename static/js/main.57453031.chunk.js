(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(24),s=n.n(a),i=(n(60),n(61),n(6)),o=n.n(i),l=n(8),u=n(9),j=n(49),d=new(n.n(j).a)("pk_test_29361ca502dd402cddad2ea2312b0d3b8b323d2947d5e",!0),b=n(26),h=n(10),m=n(115),p=n(111),x=n(119),O=n(112),f=n(21),v=n(53),y=(n(94),n(2)),g=function(e){var t=e.totalItems,n=Object(h.f)(),c=Object(h.g)();function r(e){n.push(e)}return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(m.a,{bg:"secondary",variant:"dark",fixed:"top",children:Object(y.jsxs)(p.a,{className:"d-flex justify-content-between align-items-center",children:[Object(y.jsxs)(m.a.Brand,{className:"brand",title:"Home",onClick:function(){return r("")},children:[Object(y.jsx)(v.a,{}),Object(y.jsx)("span",{children:"The Hot Pot"})]}),"/"===c.pathname&&Object(y.jsxs)(x.a,{variant:"outline-info",title:"Checkout",onClick:function(){return r("cart")},children:[Object(y.jsx)(f.d,{})," ",Object(y.jsx)(O.a,{bg:"light",children:t})]})]})})})},k=(n(101),n(54)),C=n(118),N=function(e){var t=e.product,n=e.onAddToCart;return Object(y.jsx)(k.a,{className:"product mb-5 ms-1",xs:8,md:4,lg:3,xl:2,children:Object(y.jsxs)(C.a,{className:"shadow-lg",title:t.name,children:[Object(y.jsx)(C.a.Header,{className:"bg-primary text-white text-center",children:Object(y.jsx)(C.a.Title,{children:t.name})}),Object(y.jsx)(C.a.Img,{className:"card-image",variant:"top",src:t.media.source}),Object(y.jsx)(C.a.Body,{children:Object(y.jsx)(C.a.Text,{className:"h4",dangerouslySetInnerHTML:{__html:t.description}})}),Object(y.jsxs)(C.a.Footer,{className:"text-white bg-primary d-flex justify-content-between align-items-center",children:[Object(y.jsxs)("span",{children:["Price: ",t.price.formatted_with_symbol]}),Object(y.jsx)(x.a,{variant:"outline-info",title:"Add to Cart",onClick:function(){return n(t.id,1)},children:Object(y.jsx)(f.a,{})})]})]})})},w=(n(102),n(113)),S=function(e){var t=e.products,n=e.onAddToCart;return Object(y.jsxs)("main",{className:"products",children:[Object(y.jsx)(p.a,{children:Object(y.jsx)("h1",{className:"col-12",children:"Products"})}),Object(y.jsx)(p.a,{fluid:!0,children:Object(y.jsx)(w.a,{className:"justify-content-evenly",children:t.map((function(e){return Object(y.jsx)(N,{product:e,onAddToCart:n},e.id)}))})})]})},_=(n(103),function(e){var t=e.item,n=e.onUpdateCartQuantity,c=e.onRemoveFromCart;return Object(y.jsx)(k.a,{className:"cart-item mb-5 ms-1",xs:8,md:4,lg:3,children:Object(y.jsxs)(C.a,{className:"shadow-lg",title:t.name,children:[Object(y.jsx)(C.a.Header,{className:"bg-secondary text-white text-center",children:Object(y.jsx)(C.a.Title,{children:t.name})}),Object(y.jsx)(C.a.Img,{className:"card-image",variant:"top",src:t.media.source}),Object(y.jsxs)(C.a.Footer,{className:"cart-item-footer text-white bg-secondary",children:[Object(y.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(y.jsxs)("span",{children:["Total Price: ",t.line_total.formatted_with_symbol]}),Object(y.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(y.jsx)(x.a,{variant:"outline-danger",size:"sm",title:"Decrease Quantity",onClick:function(){return n(t.id,t.quantity-1)},children:Object(y.jsx)(f.b,{})}),Object(y.jsxs)("span",{className:"text-nowrap m-2",children:["Qty: ",t.quantity]}),Object(y.jsx)(x.a,{variant:"outline-info",size:"sm",title:"Decrease Quantity",onClick:function(){return n(t.id,t.quantity+1)},children:Object(y.jsx)(f.c,{})})]})]}),Object(y.jsx)("div",{className:"d-flex justify-content-end",children:Object(y.jsx)(x.a,{className:"mt-3 text-white",variant:"warning",size:"sm",onClick:function(){return c(t.id)},children:"Remove All"})})]})]})})}),T=(n(104),function(e){var t=e.cart,n=e.handleUpdateCartQuantity,c=e.handleRemoveFromCart,r=e.handleEmptyCart,a=Object(h.f)();var s=function(){return Object(y.jsx)("h3",{className:"text-muted",children:"Your cart is empty."})},i=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(w.a,{className:"justify-content-evenly",children:t.line_items.map((function(e){return Object(y.jsx)(_,{item:e,onUpdateCartQuantity:n,onRemoveFromCart:c},e.id)}))}),Object(y.jsxs)("div",{className:"",children:[Object(y.jsxs)("h4",{children:["Subtotal: ",t.subtotal.formatted_with_symbol]}),Object(y.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(y.jsx)(x.a,{variant:"outline-primary",size:"lg",onClick:function(){return e="checkout",void a.push(e);var e},children:"Checkout"}),Object(y.jsx)(x.a,{variant:"outline-danger",size:"lg",onClick:r,children:"Empty Cart"})]})]})]})};return t.line_items?Object(y.jsx)("main",{children:Object(y.jsxs)(p.a,{className:"cart",fluid:!0,children:[Object(y.jsx)(p.a,{children:Object(y.jsx)("h1",{className:"col-12 text-center",children:"Cart"})}),t.line_items.length?Object(y.jsx)(i,{}):Object(y.jsx)(s,{})]})}):"Loading..."}),q=n(18),E=n(114),F=function(e){var t=e.order,n=Object(h.f)();return t.customer?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{children:[Object(y.jsxs)("h5",{className:"title",children:[t.customer.firstname," ",t.customer.lastname,", thank you for shopping with us!"]}),Object(y.jsxs)("h6",{className:"subtitle",children:["Order: ",t.customer_reference]})]}),Object(y.jsx)(x.a,{variant:"primary",onClick:function(){return e="",void n.push(e);var e},children:"Back to Home"})]}):Object(y.jsx)("div",{className:"d-flex p-3 m-3 justify-content-center align-items-center",children:Object(y.jsx)(E.a,{animation:"grow",className:"align-self-center"})})},P=n(116),A=n(28),L=n(55),z=n(117),I=function(e){var t=e.checkoutToken;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h6",{className:"",children:"Your Cart"}),Object(y.jsxs)(z.a,{children:[t.live.line_items.map((function(e){return Object(y.jsxs)(z.a.Item,{className:"d-flex justify-content-between lh-condensed",children:[Object(y.jsxs)("div",{children:[console.log(e),Object(y.jsx)("h6",{className:"my-0",children:e.name}),Object(y.jsxs)("p",{className:"text-muted",children:["Quantity: ",e.quantity]})]}),Object(y.jsx)("span",{className:"text-muted",children:e.line_total.formatted_with_symbol})]},e.name)})),Object(y.jsx)(z.a.Item,{children:Object(y.jsxs)("div",{children:[Object(y.jsx)("h6",{children:"Total: "}),Object(y.jsx)("span",{children:t.live.subtotal.formatted_with_symbol})]})})]})]})},Q=Object(L.a)("pk_test_51J7MvuCBN55rvKc2N0zXCLhFuJaH4fRx4cDzbojP1yT8O9UUPJcCgAMRPNmQw6y0OEIVjGA7loXeZBWqp5EbH1JU002nNdGNLh"),D=function(e){var t=e.shippingData,n=e.checkoutToken,c=e.prevStep,r=e.nextStep,a=e.onCaptureCheckout,s=function(){var e=Object(l.a)(o.a.mark((function e(c,s,i){var l,u,j,d,b;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),i&&s){e.next=3;break}return e.abrupt("return");case 3:return l=s.getElement(A.CardElement),e.next=6,i.createPaymentMethod({type:"card",card:l});case 6:u=e.sent,j=u.error,d=u.paymentMethod,j?console.log(j):(b={line_items:n.live.line_items,customer:{firstname:t.firstName,lastname:t.lastName,email:t.email},shipping:{name:"International",street:t.address1,town_city:t.city,county_state:t.shippingSubdivision,postal_zip_code:t.zip,country:t.shippingCountry},fulfillment:{shipping_method:t.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:d.id}}},console.log(b),a(n.id,b),r());case 10:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(I,{checkoutToken:n}),Object(y.jsx)(A.Elements,{stripe:Q,children:Object(y.jsx)(A.ElementsConsumer,{children:function(e){var t=e.elements,r=e.stripe;return Object(y.jsxs)(P.a,{className:"bg-secondary mt-5 rounded",onSubmit:function(e){return s(e,t,r)},children:[Object(y.jsx)(A.CardElement,{className:"bg-light rounded"}),Object(y.jsxs)("div",{className:"d-flex justify-content-evenly align-items-center m-4",children:[Object(y.jsx)(x.a,{variant:"danger",title:"prev",onClick:c,children:"Back"}),Object(y.jsxs)(x.a,{type:"submit",variant:"success",title:"next",disabled:!r,children:["Pay ",n.live.subtotal.formatted_with_symbol]})]})]})}})})]})},H=n(25),B=function(e){var t=e.name,n=e.label,c=e.required,r=e.placeholder,a=Object(H.d)(),s=a.control,i=a.register;return Object(y.jsxs)(k.a,{xs:12,md:6,children:[Object(y.jsx)(P.a.Label,{children:n}),Object(y.jsx)(H.a,{control:s,name:t,required:c,render:function(e){e.field;return Object(y.jsx)(P.a.Control,Object(q.a)({as:"input",placeholder:r},i(t)))}})]})},G=function(e){var t=e.checkoutToken,n=e.next,r=e.prevStep,a=e.methods,s=Object(c.useState)([]),i=Object(u.a)(s,2),j=i[0],b=i[1],h=Object(c.useState)(""),m=Object(u.a)(h,2),p=m[0],O=m[1],f=Object(c.useState)([]),v=Object(u.a)(f,2),g=v[0],C=v[1],N=Object(c.useState)(""),S=Object(u.a)(N,2),_=S[0],T=S[1],E=Object(c.useState)([]),F=Object(u.a)(E,2),A=F[0],L=F[1],z=Object(c.useState)(""),I=Object(u.a)(z,2),Q=I[0],D=I[1],H=Object.entries(j).map((function(e){var t=Object(u.a)(e,2);return{id:t[0],label:t[1]}})),G=Object.entries(g).map((function(e){var t=Object(u.a)(e,2);return{id:t[0],label:t[1]}})),J=A.map((function(e){return{id:e.id,label:"".concat(e.description," - (").concat(e.price.formatted_with_symbol,")")}})),M=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.services.localeListShippingCountries(t);case 2:n=e.sent,c=n.countries,b(c),O(Object.keys(c)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.services.localeListSubdivisions(t);case 2:n=e.sent,c=n.subdivisions,C(c),T(Object.keys(c)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var c,r,a=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.length>2&&void 0!==a[2]?a[2]:null,console.log(n),console.log(c),e.next=5,d.checkout.getShippingOptions(t,{country:n,region:c});case 5:r=e.sent,console.log(r),L(r),r[0]&&D(r[0].id);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){M(t.id)}),[t.id]),Object(c.useEffect)((function(){p&&R(p)}),[p]),Object(c.useEffect)((function(){_&&U(t.id,p,_)}),[t.id,p,_]),Object(y.jsxs)(P.a,{onSubmit:a.handleSubmit((function(e){return n(Object(q.a)(Object(q.a)({},e),{},{shippingCountry:p,shippingSubdivision:_,shippingOption:Q}))})),children:[Object(y.jsx)(P.a.Group,{children:Object(y.jsxs)(w.a,{className:"mb-3",children:[Object(y.jsx)(B,{required:!0,name:"address1",label:"Address",placeholder:"1234 Main St."}),Object(y.jsx)(B,{required:!0,name:"address2",label:"Address 2 (Optional)",placeholder:"Apt. or Suite #"})]})}),Object(y.jsx)(P.a.Group,{children:Object(y.jsxs)(w.a,{className:"mb-3",children:[Object(y.jsx)(B,{required:!0,name:"city",label:"City"}),Object(y.jsx)(B,{required:!0,name:"zip",label:"Zip / Postal Code"})]})}),Object(y.jsx)(P.a.Group,{children:Object(y.jsxs)(w.a,{children:[Object(y.jsxs)(k.a,{xs:12,md:4,children:[Object(y.jsx)(P.a.Label,{children:"Country"}),Object(y.jsx)(P.a.Control,{required:!0,as:"select",value:p,onChange:function(e){return O(e.target.value)},children:H.map((function(e){return Object(y.jsx)("option",{value:e.id,children:e.label},e.id)}))})]}),Object(y.jsxs)(k.a,{xs:12,md:4,children:[Object(y.jsx)(P.a.Label,{children:"State/Province"}),Object(y.jsx)(P.a.Control,{required:!0,as:"select",value:_,onChange:function(e){return T(e.target.value)},children:G.map((function(e){return Object(y.jsx)("option",{value:e.id,children:e.label},e.id)}))})]}),Object(y.jsxs)(k.a,{xs:12,md:4,children:[Object(y.jsx)(P.a.Label,{children:"Shipping Options"}),Object(y.jsx)(P.a.Control,{as:"select",value:Q,onChange:function(e){return D(e.target.value)},children:J.map((function(e){return Object(y.jsx)("option",{value:e.id,children:e.label},e.id)}))})]})]})}),Object(y.jsxs)("div",{className:"d-flex justify-content-evenly align-items-center m-4",children:[Object(y.jsx)(x.a,{variant:"secondary",title:"prev",onClick:r,children:"Previous Step"}),Object(y.jsx)(x.a,{variant:"secondary",title:"next",type:"submit",children:"Next Step"})]})]})},J=function(e){e.checkoutToken;var t=e.next,n=e.methods;return Object(y.jsxs)(P.a,{onSubmit:n.handleSubmit((function(e){return t(Object(q.a)({},e))})),children:[Object(y.jsx)(P.a.Group,{children:Object(y.jsxs)(w.a,{className:"mb-3",children:[Object(y.jsx)(B,{required:!0,name:"firstName",label:"First Name",placeholder:"John"}),Object(y.jsx)(B,{required:!0,name:"lastName",label:"Last Name",placeholder:"Doe"})]})}),Object(y.jsx)(P.a.Group,{children:Object(y.jsx)(w.a,{className:"mb-3",children:Object(y.jsx)(B,{required:!0,name:"email",label:"Email",placeholder:"example@email.com"})})}),Object(y.jsx)("div",{className:"d-flex justify-content-evenly align-items-center m-4",children:Object(y.jsx)(x.a,{variant:"secondary",title:"next",type:"submit",children:"Next Step"})})]})},M=(n(106),function(e){var t=e.checkoutToken,n=e.onCaptureCheckout,r=e.order,a=Object(c.useState)(0),s=Object(u.a)(a,2),i=s[0],o=s[1],l=Object(c.useState)({}),j=Object(u.a)(l,2),d=j[0],b=j[1],h=Object(H.c)(),m=function(){return o((function(e){return e+1}))},p=function(){return o((function(e){return e-1}))},x=function(e){b(e),m()};return Object(y.jsx)(H.b,Object(q.a)(Object(q.a)({},h),{},{children:function(e,t){switch(e){case 0:return Object(y.jsx)(J,{checkoutToken:t,next:x,methods:h});case 1:return Object(y.jsx)(G,{shippingData:d,checkoutToken:t,next:x,prevStep:p,methods:h});case 2:return Object(y.jsx)(D,{shippingData:d,checkoutToken:t,nextStep:m,prevStep:p,onCaptureCheckout:n,methods:h});case 3:return Object(y.jsx)(F,{order:r})}}(i,t)}))}),R=(n(107),function(e){var t=e.cart,n=e.order,r=e.onCaptureCheckout,a=(e.error,Object(c.useState)(null)),s=Object(u.a)(a,2),i=s[0],j=s[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.checkout.generateToken(t.id,{type:"cart"});case 3:n=e.sent,j(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("main",{children:[Object(y.jsx)(p.a,{children:Object(y.jsx)("h2",{className:"text-center",children:"Checkout"})}),Object(y.jsx)(p.a,{children:Object(y.jsx)(w.a,{className:"stepper",children:i&&Object(y.jsx)(M,{checkoutToken:i,onCaptureCheckout:r,order:n})})})]})})}),U=(n(108),function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({}),s=Object(u.a)(a,2),i=s[0],j=s[1],m=Object(c.useState)({}),p=Object(u.a)(m,2),x=p[0],O=p[1],f=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.products.list();case 2:t=e.sent,n=t.data,r(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,d.cart.retrieve();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.cart.add(t,n);case 2:c=e.sent,r=c.cart,j(r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.cart.update(t,{quantity:n});case 2:c=e.sent,r=c.cart,j(r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.cart.remove(t);case 2:n=e.sent,c=n.cart,j(c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.cart.empty();case 2:t=e.sent,n=t.cart,j(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.cart.refresh();case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.checkout.capture(t,n);case 3:c=e.sent,O(c),_(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.data.error.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){f(),v()}),[]),Object(y.jsxs)(b.a,{children:[Object(y.jsx)(g,{totalItems:i.total_items}),Object(y.jsxs)(h.c,{children:[Object(y.jsx)(h.a,{exact:!0,path:"/",children:Object(y.jsx)(S,{products:n,onAddToCart:k})}),Object(y.jsx)(h.a,{path:"/cart",children:Object(y.jsx)(T,{cart:i,handleUpdateCartQuantity:C,handleRemoveFromCart:N,handleEmptyCart:w})}),Object(y.jsx)(h.a,{path:"/checkout",children:Object(y.jsx)(R,{cart:i,order:x,onCaptureCheckout:q,error:!0})})]})]})});s.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(U,{})}),document.getElementById("root"))},60:function(e,t,n){},61:function(e,t,n){},94:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.57453031.chunk.js.map