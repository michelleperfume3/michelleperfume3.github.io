/* Michelle Perfume — լեզվի համակարգ (ARM / ENG / RUS)
   Լեզուն որոշվում է էջի <html lang> ատրիբուտից (/ , /ru/ , /en/ հասցեներ)։ */
(function () {
    var LANG_KEY = 'michelle_lang';
    var LANGS = ['hy', 'en', 'ru'];
    var LABELS = { hy: 'ARM', en: 'ENG', ru: 'RUS' };
    var NAMES = { hy: 'Հայերեն', en: 'English', ru: 'Русский' };

    var T = {
        hy: {
            nav_home: 'Գլխավոր', nav_about: 'Մեր մասին', cart: 'Զամբյուղ',
            hero_subtitle: 'Sophisticated Fluidity',
            hero_title: 'Բացահայտիր քո նոր բուրմունքը',
            hero_desc: 'Մինիմալիստական էսթետիկա և նրբագեղ հոսունություն՝ յուրաքանչյուր կաթիլում։',
            hero_btn: 'Դիտել կատալոգը',
            cat_women: 'Կանացի', cat_men: 'Տղամարդու', cat_new: 'Նորույթ',
            catalog_title: 'Մեր Տեսականին',
            search_ph: 'Որոնել ապրանքներ...',
            f_all: 'Բոլորը', f_new: '✨ Նորույթ',
            all_brands: 'Բոլոր Բրենդները', all_collections: 'Բոլոր Հավաքածուները', all_scents: 'Բոլոր Բույրերը',
            sort_price: 'Գինը', sort_asc: 'Աճման', sort_desc: 'Նվազման',
            price_range: 'Գնի միջակայք', price_min: 'Նվազագույն գին', price_max: 'Առավելագույն գին',
            from: '-ից', ml: 'մլ', variants: '{n} տարբերակ', details: 'Մանրամասն',
            shown: 'Ցուցադրված՝ {a} / {b}',
            loading: 'Բեռնվում է...', no_products: 'Ապրանք չի գտնվել',
            load_error: 'Չհաջողվեց բեռնել ապրանքները։ Թարմացրեք էջը։',
            cart_title: 'Ձեր Զամբյուղը', cart_empty: 'Ձեր զամբյուղը դատարկ է:',
            cart_total: 'Զամբյուղի Ընդհանուր Գումարը',
            installment: 'Գործում է նաև անտոկոս ապառիկ 3 ամիս ժամկետով',
            installment_alt: 'Ապառիկ',
            name_ph: 'Ձեր Անունը...', phone_ph: 'Ձեր Հեռախոսահամարը...',
            order_cart: 'Պատվիրել Զամբյուղից',
            admin_title: 'Մուտք Ադմին Համակարգ',
            admin_desc: 'Մուտք գործելու համար ներմուծեք ձեր տվյալները։',
            admin_email_ph: 'Էլ. հասցե (Email)...', admin_pass_ph: 'Գաղտնաբառ...',
            admin_login: 'Մուտք Գործել',
            fill_all: 'Խնդրում ենք լրացնել բոլոր դաշտերը։',
            not_admin: 'Այս էլ. հասցեն չունի ադմինիստրատորի իրավունքներ։',
            wrong_creds: 'Սխալ էլ. հասցե կամ գաղտնաբառ։',
            login_error: 'Մուտքի սխալ.',
            order_ok_cart: 'Ձեր զամբյուղի պատվերն ընդունված է։ Շնորհակալություն։ Մեր աշխատակիցը շուտով կկապնվի ձեզ հետ',
            fill_name_phone: 'Խնդրում ենք լրացնել անունը և հեռախոսահամարը։',
            footer_about_text: 'Michelle Perfume-ը առաջարկում է բարձրակարգ պարֆյումերիա՝ նրբագեղ հոսունությամբ և մինիմալիստական էսթետիկայով։ Յուրաքանչյուր բույր ընտրված է ձեր անհատականությունը ընդգծելու համար։',
            footer_contact: 'Կապ մեզ հետ', footer_phone: 'Հեռ.:', footer_addresses: 'Հասցեներ:',
            addr1: 'ք. Երևան, Զորավար Անդրանիկ 143',
            addr2: "ք. Երևան, Մազմանյան 1 (Garaj Masters' Mall)",
            addr3: 'ք. Երևան, Ամիրյան 12',
            rights: '© 2026 Michelle Perfume. Բոլոր իրավունքները պաշտպանված են։',
            call: 'Զանգահարել',
            /* prod.html */
            back_catalog: '← Վերադառնալ կատալոգ',
            notfound: 'Ապրանքը չի գտնվել կամ ջնջվել է։',
            p_brand: 'Ապրանքանիշ (Բրենդ)՝', p_for: 'Նախատեսված է՝', p_collection: 'Հավաքածու՝',
            p_choose: 'Ընտրեք ծավալը (մլ)՝', bio_title: 'ԲԻՕ',
            total_value: 'Ընդհանուր Արժեքը',
            add_cart: 'Ավելացնել զամբյուղ', place_order: 'Գրանցել պատվեր',
            out_stock: 'Առկա չէ', no_image: 'Նկար հասանելի չէ',
            volume_opts: '{n} ծավալի տարբերակ',
            no_bio: 'Այս ապրանքի համար ԲԻՕ դեռ ավելացված չէ։',
            added: 'Ապրանքն ավելացվեց զամբյուղի մեջ։',
            order_ok: 'Ձեր պատվերն ընդունված է։ Շնորհակալություն գնումների համար: Մեր աշխատակիցը շուտով կկապնվի ձեզ հետ',
            /* com.html */
            back_home: '← Գլխավոր',
            title_com: 'Michelle | Մեր մասին',
            about_text: 'Մենք ստեղծում ենք բացառիկ բույրեր, որոնք ընդգծում են ձեր յուրահատկությունն ու ոճը։ Յուրաքանչյուր կաթիլ պատմում է իր պատմությունը։',
            mas_mas: 'Մեզ մոտ գործում է ՄԱՍ-ՄԱՍ վճարման համակարգ՝ ՀԵՇՏ ՈՒ ԱՐԱԳ։'
        },
        en: {
            nav_home: 'Home', nav_about: 'About us', cart: 'Cart',
            hero_subtitle: 'Sophisticated Fluidity',
            hero_title: 'Discover your new fragrance',
            hero_desc: 'Minimalist aesthetics and graceful fluidity in every single drop.',
            hero_btn: 'View catalog',
            cat_women: 'Women', cat_men: 'Men', cat_new: 'New',
            catalog_title: 'Our Collection',
            search_ph: 'Search products...',
            f_all: 'All', f_new: '✨ New',
            all_brands: 'All brands', all_collections: 'All collections', all_scents: 'All scents',
            sort_price: 'Price', sort_asc: 'Low to high', sort_desc: 'High to low',
            price_range: 'Price range', price_min: 'Minimum price', price_max: 'Maximum price',
            from: 'from', ml: 'ml', variants: '{n} options', details: 'Details',
            shown: 'Showing: {a} / {b}',
            loading: 'Loading...', no_products: 'No products found',
            load_error: 'Failed to load products. Please refresh the page.',
            cart_title: 'Your Cart', cart_empty: 'Your cart is empty.',
            cart_total: 'Cart total',
            installment: 'Interest-free installments for 3 months are also available',
            installment_alt: 'Installments',
            name_ph: 'Your name...', phone_ph: 'Your phone number...',
            order_cart: 'Order from cart',
            admin_title: 'Admin Login',
            admin_desc: 'Enter your credentials to log in.',
            admin_email_ph: 'Email...', admin_pass_ph: 'Password...',
            admin_login: 'Log in',
            fill_all: 'Please fill in all fields.',
            not_admin: 'This email does not have administrator rights.',
            wrong_creds: 'Wrong email or password.',
            login_error: 'Login error:',
            order_ok_cart: 'Your cart order has been received. Thank you! Our staff will contact you shortly.',
            fill_name_phone: 'Please enter your name and phone number.',
            footer_about_text: 'Michelle Perfume offers premium perfumery with graceful fluidity and minimalist aesthetics. Every fragrance is chosen to highlight your individuality.',
            footer_contact: 'Contact us', footer_phone: 'Tel.:', footer_addresses: 'Addresses:',
            addr1: 'Yerevan, Zoravar Andranik 143',
            addr2: "Yerevan, Mazmanyan 1 (Garaj Masters' Mall)",
            addr3: 'Yerevan, Amiryan 12',
            rights: '© 2026 Michelle Perfume. All rights reserved.',
            call: 'Call',
            back_catalog: '← Back to catalog',
            notfound: 'Product not found or has been removed.',
            p_brand: 'Brand:', p_for: 'Intended for:', p_collection: 'Collection:',
            p_choose: 'Choose volume (ml):', bio_title: 'BIO',
            total_value: 'Total price',
            add_cart: 'Add to cart', place_order: 'Place order',
            out_stock: 'Out of stock', no_image: 'Image not available',
            volume_opts: '{n} volume options',
            no_bio: 'No description has been added for this product yet.',
            added: 'Product added to cart.',
            order_ok: 'Your order has been received. Thank you for your purchase! Our staff will contact you shortly.',
            back_home: '← Home',
            title_com: 'Michelle | About us',
            about_text: 'We create exclusive fragrances that highlight your uniqueness and style. Every drop tells its own story.',
            mas_mas: 'We offer a PART-BY-PART payment system: EASY AND FAST.'
        },
        ru: {
            nav_home: 'Главная', nav_about: 'О нас', cart: 'Корзина',
            hero_subtitle: 'Sophisticated Fluidity',
            hero_title: 'Откройте для себя новый аромат',
            hero_desc: 'Минималистичная эстетика и изящная плавность в каждой капле.',
            hero_btn: 'Смотреть каталог',
            cat_women: 'Женские', cat_men: 'Мужские', cat_new: 'Новинки',
            catalog_title: 'Наш ассортимент',
            search_ph: 'Поиск товаров...',
            f_all: 'Все', f_new: '✨ Новинки',
            all_brands: 'Все бренды', all_collections: 'Все коллекции', all_scents: 'Все ароматы',
            sort_price: 'Цена', sort_asc: 'По возрастанию', sort_desc: 'По убыванию',
            price_range: 'Диапазон цен', price_min: 'Минимальная цена', price_max: 'Максимальная цена',
            from: 'от', ml: 'мл', variants: '{n} вариантов', details: 'Подробнее',
            shown: 'Показано: {a} / {b}',
            loading: 'Загрузка...', no_products: 'Товары не найдены',
            load_error: 'Не удалось загрузить товары. Обновите страницу.',
            cart_title: 'Ваша корзина', cart_empty: 'Ваша корзина пуста.',
            cart_total: 'Общая сумма корзины',
            installment: 'Также доступна рассрочка без процентов на 3 месяца',
            installment_alt: 'Рассрочка',
            name_ph: 'Ваше имя...', phone_ph: 'Ваш номер телефона...',
            order_cart: 'Заказать из корзины',
            admin_title: 'Вход в админ-панель',
            admin_desc: 'Введите свои данные для входа.',
            admin_email_ph: 'Эл. почта...', admin_pass_ph: 'Пароль...',
            admin_login: 'Войти',
            fill_all: 'Пожалуйста, заполните все поля.',
            not_admin: 'У этого адреса нет прав администратора.',
            wrong_creds: 'Неверная почта или пароль.',
            login_error: 'Ошибка входа:',
            order_ok_cart: 'Ваш заказ из корзины принят. Спасибо! Наш сотрудник скоро свяжется с вами.',
            fill_name_phone: 'Пожалуйста, укажите имя и номер телефона.',
            footer_about_text: 'Michelle Perfume предлагает премиальную парфюмерию с изящной плавностью и минималистичной эстетикой. Каждый аромат подобран, чтобы подчеркнуть вашу индивидуальность.',
            footer_contact: 'Свяжитесь с нами', footer_phone: 'Тел.:', footer_addresses: 'Адреса:',
            addr1: 'г. Ереван, Зоравар Андраник 143',
            addr2: "г. Ереван, Мазманян 1 (Garaj Masters' Mall)",
            addr3: 'г. Ереван, Амирян 12',
            rights: '© 2026 Michelle Perfume. Все права защищены.',
            call: 'Позвонить',
            back_catalog: '← Назад в каталог',
            notfound: 'Товар не найден или удалён.',
            p_brand: 'Бренд:', p_for: 'Предназначен для:', p_collection: 'Коллекция:',
            p_choose: 'Выберите объём (мл):', bio_title: 'БИО',
            total_value: 'Общая стоимость',
            add_cart: 'В корзину', place_order: 'Оформить заказ',
            out_stock: 'Нет в наличии', no_image: 'Изображение недоступно',
            volume_opts: '{n} вариантов объёма',
            no_bio: 'Описание для этого товара пока не добавлено.',
            added: 'Товар добавлен в корзину.',
            order_ok: 'Ваш заказ принят. Спасибо за покупку! Наш сотрудник скоро свяжется с вами.',
            back_home: '← Главная',
            title_com: 'Michelle | О нас',
            about_text: 'Мы создаём эксклюзивные ароматы, которые подчёркивают вашу уникальность и стиль. Каждая капля рассказывает свою историю.',
            mas_mas: 'У нас действует система оплаты ЧАСТЯМИ: ЛЕГКО И БЫСТРО.'
        }
    };

    function readLang() {
        var l = (document.documentElement.getAttribute('lang') || '').toLowerCase().slice(0, 2);
        return LANGS.indexOf(l) !== -1 ? l : 'hy';
    }

    /* Նույն էջի հասցեն ընտրված լեզվով: / -> /ru/ -> /en/ ; /com.html -> /ru/com.html */
    function pathFor(l) {
        var p = location.pathname.replace(/^\/(ru|en)(?=\/|$)/, '');
        if (p === '') p = '/';
        if (l !== 'hy') p = '/' + l + p;
        return p + location.search + location.hash;
    }

    var i18n = {
        lang: readLang(),
        t: function (key, vars) {
            var s = (T[i18n.lang] && T[i18n.lang][key]);
            if (s === undefined) s = (T.hy[key] !== undefined ? T.hy[key] : key);
            if (vars) for (var k in vars) s = s.split('{' + k + '}').join(vars[k]);
            return s;
        },
        /* Բազայում պահվող սեռի արժեքը (Կանացի / Տղամարդու / Unisex) -> թարգմանված անուն */
        gender: function (g) {
            if (g === 'Կանացի') return i18n.t('cat_women');
            if (g === 'Տղամարդու') return i18n.t('cat_men');
            return g || 'Unisex';
        },
        /* Բազայի դաշտի լեզվային տարբերակ՝ field_en / field_ru, հակառակ դեպքում՝ field */
        pick: function (obj, field) {
            if (!obj) return '';
            if (i18n.lang !== 'hy') {
                var v = obj[field + '_' + i18n.lang];
                if (v && String(v).trim() !== '') return v;
            }
            return obj[field] || '';
        },
        apply: function () {
            document.documentElement.lang = i18n.lang;
            document.querySelectorAll('[data-i18n]').forEach(function (el) {
                el.textContent = i18n.t(el.getAttribute('data-i18n'));
            });
            document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
                el.setAttribute('placeholder', i18n.t(el.getAttribute('data-i18n-placeholder')));
            });
            document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
                el.setAttribute('alt', i18n.t(el.getAttribute('data-i18n-alt')));
            });
            document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
                el.setAttribute('aria-label', i18n.t(el.getAttribute('data-i18n-aria')));
            });
            var idx = LANGS.indexOf(i18n.lang);
            document.querySelectorAll('.lang-switch').forEach(function (sw) {
                sw.querySelector('.lang-pill').style.transform = 'translateX(' + (idx * 100) + '%)';
                sw.querySelectorAll('a.lang-opt').forEach(function (b) {
                    b.classList.toggle('active', b.getAttribute('data-lang') === i18n.lang);
                });
            });
        },
        setLang: function (l) {
            if (LANGS.indexOf(l) === -1 || l === i18n.lang) return;
            location.href = pathFor(l);
        }
    };
    window.i18n = i18n;

    /* ─── Լեզվի ընտրիչի դիզայն ─── */
    var css = '' +
        '.lang-switch{position:relative;display:inline-grid;grid-template-columns:repeat(3,1fr);padding:3px;margin-right:10px;flex-shrink:0;' +
        'background:rgba(255,255,255,.7);border:1px solid rgba(0,0,0,.08);border-radius:999px;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);box-shadow:0 2px 10px rgba(0,0,0,.08);}' +
        '.lang-switch .lang-pill{position:absolute;top:3px;bottom:3px;left:3px;width:calc((100% - 6px)/3);background:linear-gradient(135deg,#1a1a1a,#3a3a3a);border-radius:999px;box-shadow:0 2px 6px rgba(0,0,0,.25);transition:transform .35s cubic-bezier(.4,0,.2,1);}' +
        '.lang-switch a.lang-opt{position:relative;z-index:1;display:block;text-align:center;text-decoration:none;border:none;background:transparent;cursor:pointer;font-family:inherit;font-weight:700;font-size:11px;line-height:1;letter-spacing:.6px;padding:8px 10px;border-radius:999px;color:#444;transition:color .25s;}' +
        '.lang-switch a.lang-opt:hover{color:#000;}' +
        '.lang-switch a.lang-opt.active,.lang-switch a.lang-opt.active:hover{color:#fff;}' +
        '.lang-switch.fixed{position:fixed;top:20px;right:20px;margin:0;z-index:3000;}' +
        '@media (max-width:480px){.lang-switch{margin-right:6px;}.lang-switch a.lang-opt{font-size:10px;padding:7px 7px;letter-spacing:.3px;}.lang-switch.fixed{top:14px;right:10px;}}' +
        /* Երբ burger մենյուն ակտիվ է (բջջային/փոքր էկրան), header-ի ընտրիչը թաքնվում է՝ լեզուն ընտրվում է մենյուից */
        'body.lang-in-menu .lang-switch.lang-header{display:none;}' +
        '.mobile-menu-links .lang-menu-item{list-style:none;display:flex;justify-content:center;width:min(300px,86vw);margin:40px auto 0;padding-top:28px;border-top:1px solid rgba(0,0,0,.1);}' +
        '.lang-switch.lang-menu{display:grid;width:100%;margin:0;padding:4px;background:#fff;box-shadow:0 4px 16px rgba(0,0,0,.1);}' +
        /* Մենյուն բաց ժամանակ header-ը (burger/X կոճակով) մնում է overlay-ի վերևում, որպեսզի կարողանան փակել */
        '.main-header:has(.burger-menu.open){z-index:1003;}' +
        '.lang-switch.lang-menu .lang-pill{top:4px;bottom:4px;left:4px;width:calc((100% - 8px)/3);}' +
        '.lang-switch.lang-menu a.lang-opt{font-size:15px;padding:13px 10px;letter-spacing:.8px;}';

    function buildSwitcher(extraClass) {
        var sw = document.createElement('div');
        sw.className = 'lang-switch ' + extraClass;
        sw.setAttribute('role', 'group');
        sw.setAttribute('aria-label', 'Language');
        var html = '<span class="lang-pill"></span>';
        LANGS.forEach(function (l) {
            html += '<a class="lang-opt" href="' + pathFor(l) + '" hreflang="' + l + '" lang="' + l + '" data-lang="' + l + '" title="' + NAMES[l] + '">' + LABELS[l] + '</a>';
        });
        sw.innerHTML = html;
        return sw;
    }

    function syncLayout() {
        var burger = document.getElementById('burgerToggle');
        var inMenu = !!burger && window.getComputedStyle(burger).display !== 'none';
        document.body.classList.toggle('lang-in-menu', inMenu);
    }

    function mountSwitcher() {
        var style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);

        var host = document.querySelector('.header-actions');
        if (host) {
            host.insertBefore(buildSwitcher('lang-header'), host.firstChild);
        } else {
            var fixed = buildSwitcher('lang-header fixed');
            document.body.appendChild(fixed);
        }

        /* Երկրորդ ընտրիչ՝ բջջային մենյուի ներսում */
        var menuList = document.querySelector('#mobileMenu .mobile-menu-links');
        var overlay = document.getElementById('mobileMenu');
        if (menuList) {
            var li = document.createElement('li');
            li.className = 'lang-menu-item';
            li.appendChild(buildSwitcher('lang-menu'));
            menuList.appendChild(li);
        } else if (overlay) {
            overlay.appendChild(buildSwitcher('lang-menu'));
        }

        syncLayout();
        window.addEventListener('resize', syncLayout);
    }

    function init() { mountSwitcher(); i18n.apply(); }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();







