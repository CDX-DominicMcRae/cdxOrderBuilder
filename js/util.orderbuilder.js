$(function () {
    $("#datetimepicker").datetimepicker({
        allowTimes: [
            '08:00', '08:30', '09:00', '09:30',
            '10:00', '10:30', '11:00', '11:30',
            '12:00', '12:30', '13:00', '13:30',
            '14:00', '14:30', '15:00', '15:30',
            '16:00', '16:30', '17:00', '17:30',
            '18:00', '18:30', '19:00', '19:30',
            '20:00'
        ],
        defaultDate: new Date(),
        defaultTime: '08:00',
        format: 'Y-m-d\\TH:i',
        minDate: '-1970/01/01',
        maxDate: '+1970/01/08',
        validateOnBlur: false,
        onChangeDateTime: function (dp, $input) {
            order.delivery.desiredDate = $input.val() + ':00';
        }
    });
});

function getDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if (month.toString().length == 1) {
        month = '0' + month;
    }
    if (day.toString().length == 1) {
        day = '0' + day;
    }
    if (hour.toString().length == 1) {
        hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        minute = '0' + minute;
    }
    if (second.toString().length == 1) {
        second = '0' + second;
    }
    var dateTime = year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.000';
    return dateTime;
}

let currentDateTime = new Date();
let orderCount = 1;
let articleCount = 1;
let envURL = '';

let order = {
    orderNumber: 70000000,
    prefix: "CX",
    channel: "OrderBuilder",
    createDateTime: "2021-01-01T00:00:00.000",
    orderTotal: 80.7,
    lineCount: 1,
    itemCount: 1,
    orderDiscount: 0,
    isItemSubsAllowed: true,
    hasSubsItems: true,
    isItemLevelSubsEnabled: true,
    stagingFraudStatus: "Bypass",
    packagingName: "Paper Bags",
    packagingID: "1",
    packagingDeliveryCombinedFlag: true,
    coupons: [],
    comments: [
        {
            type: 1,
            comment: ""
        },
        {
            type: 2,
            comment: ""
        }
    ],
    discounts: [],
    delivery: {
        suburbNumber: 10387,
        method: 2,
        window: 25858,
        startTime: "1900-01-01T19:00:00",
        endTime: "1900-01-01T20:00:00",
        pickupPadding: 0,
        desiredDate: "2021-09-26T00:00:00",
        pickupType: "",
        isExpress: false
    },
    fees: {
        deliveryAmountTotal: 1,
        deliveryAmountBase: 1,
        packagingAmount: 1,
        packagingPercent: 0
    },
    customerNumber: 1370762,
    customer: {
        numberOfOrders: 124,
        dateOfBirth: "1992-12-07T00:00:00",
        companyName: "Test Company",
        companyABN: "",
        homePhone: "020000000",
        businessPhone: "",
        mobilePhone: "",
        isAllowSamples: false,
        isAllowSMS: false,
        isTeamMember: false,
        oneCard: "9481005657344"
    },
    addresses: [
        {
            addressType: "C",
            title: "",
            firstName: "Auto",
            middleInitial: "X ",
            lastName: "Order Builder",
            email: "cdxorderbuilder@countdown.test",
            phone: "0273528584",
            street1: "35 Alexandrina Street",
            street2: "Marshland Christchurch 8083",
            postalCode: "",
            suburb: "The Palms",
            city: "The Palms",
            country: "New Zealand",
            externalAddressId: null
        },
        {
            addressType: "D",
            title: "",
            firstName: "Auto",
            middleInitial: "X ",
            lastName: "Order Builder",
            email: "cdxorderbuilder@countdown.test",
            phone: " ",
            street1: "QUSXYWXZ",
            street2: "LOJFIJYV",
            postalCode: "",
            suburb: "Mt Roskill Click and Collect",
            city: "Mt Roskill Click and Collect",
            country: "New Zealand",
            externalAddressId: null
        }
    ],
    payments: [],
    orderLines: [
        {
            lineNumber: 1,
            stockCode: "124284",
            adId: null,
            description: "sprite soft drink ",
            pricingUnit: "Each",
            isSubsAllowed: true,
            listPrice: 15,
            salePrice: 15,
            discount: 0,
            quantity: 1,
            total: 15,
            instructions: "",
            offerNumber: null,
            shippingPrice: null,
            shippingTypeCode: null,
            shippingZoneCode: null,
            deliveryText: null,
            taxRate: 15,
            deliveryAddressType: "D",
            purchasingUnit: null,
            purchasingQuantity: null
        },
        {
            lineNumber: 2,
            stockCode: "500459",
            adId: null,
            description: "cathedral cove coconut yoghurt raspberry chia",
            pricingUnit: "Each",
            isSubsAllowed: true,
            listPrice: 9,
            salePrice: 9,
            discount: 0,
            quantity: 1,
            total: 9,
            instructions: "",
            offerNumber: null,
            shippingPrice: null,
            shippingTypeCode: null,
            shippingZoneCode: null,
            deliveryText: null,
            taxRate: 15,
            deliveryAddressType: "D",
            purchasingUnit: null,
            purchasingQuantity: null
        },
        {
            lineNumber: 3,
            stockCode: "215441",
            adId: null,
            description: "streets calippo ice blocks orange lemon lime minis 575ml",
            pricingUnit: "Each",
            isSubsAllowed: true,
            listPrice: 7,
            salePrice: 7,
            discount: 0,
            quantity: 1,
            total: 7,
            instructions: "",
            offerNumber: null,
            shippingPrice: null,
            shippingTypeCode: null,
            shippingZoneCode: null,
            deliveryText: null,
            taxRate: 15,
            deliveryAddressType: "D",
            purchasingUnit: null,
            purchasingQuantity: null
        },
        {
            lineNumber: 4,
            stockCode: "749763",
            adId: null,
            description: "loreal revitalift anti ageing cream laser x3",
            pricingUnit: "Each",
            isSubsAllowed: true,
            listPrice: 45,
            salePrice: 45,
            discount: 0,
            quantity: 1,
            total: 45,
            instructions: "",
            offerNumber: null,
            shippingPrice: null,
            shippingTypeCode: null,
            shippingZoneCode: null,
            deliveryText: null,
            taxRate: 15,
            deliveryAddressType: "D",
            purchasingUnit: null,
            purchasingQuantity: null
        },
        {
            lineNumber: 5,
            stockCode: "4407",
            adId: null,
            description: "wattie's spaghetti & sausages",
            pricingUnit: "Each",
            isSubsAllowed: true,
            listPrice: 3.7,
            salePrice: 3.7,
            discount: 0,
            quantity: 1,
            total: 3.7,
            instructions: "",
            offerNumber: null,
            shippingPrice: null,
            shippingTypeCode: null,
            shippingZoneCode: null,
            deliveryText: null,
            taxRate: 15,
            deliveryAddressType: "D",
            purchasingUnit: null,
            purchasingQuantity: null
        }
    ],
    idCheck: false,
    ccCheck: false,
    cctAlert: false,
    onlineStoreId: "9023"
}

window.onload = function () {
    let submit = document.getElementById('submit');
    submit.addEventListener("click", stageOrderJSON.bind(this));
}

function getOrderNumber() {
    order.orderNumber = Math.floor(Math.random() * (9999999 - 1000000) + 1000000) + 70000000;
}

// To implement
function setEnvironment(value) {
    if (value = 1) {
        envURL = 'http://ZAKLPEVMDE062.progressive.co.nz/ods.api/api/online/orders';
    }
    if (value = 2) {
        envURL = 'http://ods-uat.progressive.co.nz/ods.api/api/online/orders';
    }
}

// To implement
function setFulfilmentMethod(value) {
    order.delivery.method = value;
}

function stageOrderJSON() {
    order.prefix = document.getElementById("inputOrderPrefix").value;
    order.createDateTime = getDateTime();
    order.addresses[0].firstName = document.getElementById("inputFirstName").value;
    order.addresses[0].lastName = document.getElementById("inputLastName").value;
    order.addresses[1].firstName = document.getElementById("inputFirstName").value;
    order.addresses[1].lastName = document.getElementById("inputLastName").value;
    order.delivery.method = document.getElementById("inputDeliveryMethod").value;
    order.onlineStoreId = document.getElementById("inputStore").value;

    // To implement
    // setEnvironment(document.getElementById(""));
    // setFulfilmentMethod(document.getElementById(""));
    orderCount = document.getElementById("inputNumberOfOrders").value;
    buildOrderJSON();
}

function buildOrderJSON() {
    for (i = 0; i < orderCount; i++) {
        getOrderNumber();
        console.log(JSON.stringify(order));
        postOrder();
    }
}

function postOrder() {
    const settings = {
        method: 'POST',
        // addresses: {
        //     local: {
        //         address: '100.64.0.2',
        //         family: 'IPv4',
        //         port: 64321
        //     },
        //     remote: {
        //         address: '100.64.1.62',
        //         family: 'IPv4',
        //         port: 80
        //     }
        // },
        mode: 'no-cors',
        headers: {
            Authorization: '',
            'Content-Type': 'application/json',
            Accept: '*/*',
            Host: 'ods-uat.progressive.co.nz',
            'Accept-Encoding': 'gzip, deflate, br',
            Connection: 'keep-alive',
            'Content-Length': JSON.stringify(order).length
        },
        body: JSON.stringify(order)
    };
    fetch('http://ods-uat.progressive.co.nz/ods.api/api/online/orders', settings)
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}