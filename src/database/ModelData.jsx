// modelsData.js
const models = {
    Taycan: [
        {
            title: "Taycan",
            variant: "Taycan",
            tag: "Electric",
            price: "₹ 1,69,78,000.00 incl. VAT*",
            accel: "4.8 s",
            power: "300 kW / 408 PS",
            speed: "230 km/h",
            img: "https://images-porsche.imgix.net/-/media/5F3468201ACF4D2CA8B3012BC9FB9774_1605711B6C234CDFB427AECC09D32468_TA24Q3CIX0010-taycan-4s-side?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format"
        },
        {
            title: "Taycan",
            variant: "Taycan 4S",
            tag: "Petrol",
            price: "₹ 1,95,89,000.00 incl. VAT*",
            accel: "1.7 s",
            power: "440 kW / 598 PS",
            speed: "250 km/h",
            img: "https://images-porsche.imgix.net/-/media/EFA98263729F4470939DD168693247DB_BF96D641472449529407A93C5F498A9D_taycan_4s_black_edition_sideshot_corr?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format"
        },
        {
            title: "Taycan",
            variant: "Taycan 4S Black Edition",
            tag: "Gasoline",
            price: "₹ 2,07,10,000.00 incl. VAT*",
            accel: "2.7 s",
            power: "440 kW / 598 PS",
            speed: "250 km/h",
            img: "https://images-porsche.imgix.net/-/media/5F3468201ACF4D2CA8B3012BC9FB9774_1605711B6C234CDFB427AECC09D32468_TA24Q3CIX0010-taycan-4s-side?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format"
        },
        {
            title: "Taycan",
            variant: "Taycan Turbo",
            tag: "Electric",
            price: "₹ 2,69,46,000.00 incl. VAT*",
            accel: "2.7 s",
            power: "650 kW / 884 PS",
            speed: "260 km/h",
            img: "https://images-porsche.imgix.net/-/media/5F3468201ACF4D2CA8B3012BC9FB9774_1605711B6C234CDFB427AECC09D32468_TA24Q3CIX0010-taycan-4s-side?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format"
        },
    ],

    911: [
        {
            title: "911",
            variant: "911 Carrera",
            tag: "Petrol",
            price: "₹ 1,84,00,000",
            accel: "6.2 s",
            power: "283 kW / 385 PS",
            speed: "293 km/h",
            img: "https://images-porsche.imgix.net/-/media/5F3468201ACF4D2CA8B3012BC9FB9774_1605711B6C234CDFB427AECC09D32468_TA24Q3CIX0010-taycan-4s-side?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format"
        },
        {
            title: "911",
            variant: "911 Carrera S",
            tag: "Gasoline",
            price: "₹ 2,10,00,000",
            accel: "3.9 s",
            power: "316 kW / 430 PS",
            speed: "305 km/h",
            img: "https://images-porsche.imgix.net/-/media/5F3468201ACF4D2CA8B3012BC9FB9774_1605711B6C234CDFB427AECC09D32468_TA24Q3CIX0010-taycan-4s-side?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format"

        },
        {
            title: "911",
            variant: "911 Turbo",
            tag: "Petrol",
            price: "₹ 2,40,00,000",
            accel: "8.9 s",
            power: "500 kW / 580 PS",
            speed: "320 km/h",
            img: "https://images-porsche.imgix.net/-/media/5F3468201ACF4D2CA8B3012BC9FB9774_1605711B6C234CDFB427AECC09D32468_TA24Q3CIX0010-taycan-4s-side?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format"

        },
    ],
    Panamera: [
        {
            power: "100 kW / 580 PS",
            speed: "320 km/h",
            accel: "1.9 s",
            tag: "Gasoline",
            title: "Panamera",
            variant: "Panamera 4 E-Hybrid",
            description: "A luxury sports sedan combining performance and efficiency with hybrid technology.",
            price: "₹1.65 Cr",
            img: "https://images-porsche.imgix.net/-/media/5F3468201ACF4D2CA8B3012BC9FB9774_1605711B6C234CDFB427AECC09D32468_TA24Q3CIX0010-taycan-4s-side?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format"

        },
        {
            power: "400 kW / 580 PS",
            speed: "310 km/h",
            accel: "2.9 s",
            tag: "Electric",
            title: "Panamera",
            variant: "Panamera Turbo S",
            description: "High-performance Panamera with turbocharged V8 engine and sporty design.",
            price: "₹2.12 Cr",
            img: "https://images-porsche.imgix.net/-/media/5F3468201ACF4D2CA8B3012BC9FB9774_1605711B6C234CDFB427AECC09D32468_TA24Q3CIX0010-taycan-4s-side?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format"

        },
    ],
    718: [
        {
            power: "127 kW / 580 PS",
            speed: "320 km/h",
            accel: "2.9 s",
            tag: "Electric",
            title: "718",
            variant: "718 Cayman",
            description: "Mid-engine coupe with outstanding handling and pure driving pleasure.",
            price: "₹1.20 Cr",
            img: "https://images-porsche.imgix.net/-/media/5F3468201ACF4D2CA8B3012BC9FB9774_1605711B6C234CDFB427AECC09D32468_TA24Q3CIX0010-taycan-4s-side?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format"

        },
        {
            power: "427 kW / 580 PS",
            speed: "320 km/h",
            accel: "2.9 s",
            tag: "Gasoline",
            title: "718",
            variant: "718 Boxster",
            description: "Open-top roadster that delivers iconic Porsche performance.",
            price: "₹1.25 Cr",
            img: "https://images-porsche.imgix.net/-/media/5F3468201ACF4D2CA8B3012BC9FB9774_1605711B6C234CDFB427AECC09D32468_TA24Q3CIX0010-taycan-4s-side?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format"
        },
    ],
};

export default models;