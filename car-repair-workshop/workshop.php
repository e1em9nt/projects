<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Авторемонтні майстерні</title>
    <link rel="stylesheet" href="/bootstrap-5.3.3-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="other.css">
</head>
<body>
    <?php
// Функція, яка зчитує дані з файлу і повертає масив з цими даними
function readDataFromFile($filename) {
    $data = []; // Початковий порожній масив для зберігання даних
    $file = fopen($filename, "r"); // Відкриття файлу для читання
    if ($file) {
        while (($line = fgets($file)) !== false) {
            // Розділення рядка на елементи за допомогою роздільника (наприклад, коми)
            $elements = explode(",", $line);
            // Додавання рядка даних до масиву даних
            $data[] = $elements;
        }
        fclose($file); // Закриття файлу
    }
    return $data; // Повернення масиву з даними
}

// Виклик функції readDataFromFile() з вказанням шляху до файлу з даними
$data = readDataFromFile("autoWorkshopAddress.csv");

$counter_file = "counter.txt"; // Файл для зберігання кількості показів

// Зчитування поточного лічильника
$count = file_get_contents($counter_file);

// Інкрементування лічильника
$count++;

// Запис нового значення у файл
file_put_contents($counter_file, $count);
echo "Кількість показів сайту: $count";
?>

<header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="./assets/logo.jpeg" alt="logo" width="80px" class="rounded-circle">
                Авторемонтні майстерні Львів
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#about">Про нас</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#services">Послуги</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#record">Контакти</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#locations">Локації</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#page-views">Перегляди</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>

<main>
    <section id="about" class="section section-1 p-5">
        <div class="container rounded-3 bg-light" style="padding: 15px">
            <h2>Про Компанію</h2>
            <div class="row">
                <div class="col-md-6">
                    <img src="./assets/about.jpg" alt="car" class="img-fluid mb-4">
                </div>
                <div class="col-md-6">
                    <p>Автосервіс “Auto Repair Shop” - лідер в сфері обслуговування авто на Заході України. Наші
                        професіонали надають детальну консультацію по ремонту та догляду за автомобілем, а досвідчені
                        майстри допомагають підтримувати технічну складову авто наших клієнтів в прекрасному
                        стані.</p>
                    <p>Ми розуміємо, що якісний сервіс не має бути розкішшю. Тому пропонуємо доступні ціни, не змінюючи
                        якість наших послуг.</p>
                    <p>Запрошуємо Вас відчути наш професіоналізм і теплий підхід до кожного клієнта.</p>
                </div>
            </div>
        </div>
    </section>
    <section id="services" class="section section-2 p-5">
        <div class="container rounded-3 bg-light" style="padding: 15px">
            <h2>Наші Послуги</h2>
            <div class="row">
                <div class="col-md-6">
<!--                     <img src="./assets/services.jpg" alt="services" class="img-fluid mb-4"> -->
                    <div class="slider">
                        <div class="slider-line">
                            <img src="./assets/services1.jpg" alt="services-1"/>
                            <img src="./assets/services2.jpg" alt="services-2"/>
                            <img src="./assets/services3.jpg" alt="services-3"/>
                        </div>
                    </div>
                    <button class="slider-prev btn btn-primary">Prev</button>
                    <button class="slider-next btn btn-primary">Next</button>
                </div>
                <div class="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item">Діагностика авто</li>
                        <li class="list-group-item">Сервісне обслуговування</li>
                        <li class="list-group-item">Автоелектрика</li>
                        <li class="list-group-item">Ремонт ходової</li>
                        <li class="list-group-item">Ремонт двигуна</li>
                        <li class="list-group-item">Паливна система</li>
                        <li class="list-group-item">Гальмівна система</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section id="record" class="section section-3 p-5">
        <div class="container rounded-3 bg-light" style="padding: 15px">
            <h2>Записатися на сервіс</h2>
            <div>
                <p>Для запису зателефонуйте нам:</p><br>
                <a href="tel:+380678442866"><img src="./assets/phone_btn.png" width="80px" class="rounded-pill" style="width: 100px"></a><br><br>
                <p class="p-2">або заповніть форму нижче:</p>
                <form id="feedback" class="row">
                    <div class="col-md-6 col-sm-12">
                        <input type="text" name="" placeholder="Ім'я" required="required" class="form-control mb-3">
                        <input type="email" name="" placeholder="Email@domain.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                               required="required" class="form-control mb-3 ">
                    </div>
                    <div class="col-md-6 col-sm-12">     
                        <input type="tel" name="" placeholder="Телефон" pattern="[0-9]{10}" required="required" class="form-control mb-3">
                        <input type="text" name="" placeholder="Повідомлення" class="form-control mb-3">
                        <button type="submit" form="feedback" class="btn btn-primary">Ок</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <section id="locations" class="section section-4 p-5">
        <div class="container rounded-3 bg-light" style="padding: 15px">
            <h2>Адреси майстерень</h2>
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Область</th>
                            <th>Місто/Село</th>
                            <th>Вулиця</th>
                            <th>Номер будинку</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        // Виведення даних з масиву $data у вигляді рядків таблиці
                        foreach ($data as $row) {
                            echo "<tr>";
                            foreach ($row as $value) {
                                echo "<td>$value</td>";
                            }
                            echo "</tr>";
                        }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    <section id="page-views" class="section section-5 p-5">
        <div class="container rounded-3 bg-light" style="padding: 15px">
            <h2>Кількість показів сторінки</h2>
            <p>Ця сторінка була переглянута <?php echo $count; ?> разів.</p>
        </div>
    </section>

</main>
<footer class="bg-dark text-light p-4">
    <div class="container text-center">
        <p>Email: <br><a href="mailto:autorepair@shop.com" class="footer_info text-decoration-none anim">autorepair@shop.com</a></p>
        <p>Телефон: <br> <a href="tel:+380" class="footer_info text-decoration-none anim">+380671111111</a></p>
        <p>Графік роботи:<p class="footer_info text-secondary">Пн. - Пт.: 9:00 - 18:00 <br> Сб.: 9:00 - 15:00</p><br>
        <p>Політика конфіденційності</p></p>
        <p class="footer_info text-secondary">Ми використовуємо cookie, щоб сайт був зручнішим. Вони містять інформацію про ваші
            попередні відвідування. Відмовитись від їх використання можна в налаштуваннях браузера.</p>
        <p>&copy;Auto Repair Shop 2024</p>
    </div>
</footer>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"> </script>
<script src="script_ad.js"></script>
<script>
        $(function () {
                      $("a[href^='#']").click(function () {
                  const target = $(this).attr("href");
                  $("html,body").animate(
                    { scrollTop: $(target).offset().top - 50 },
                    500
                  );
                });
              });
</script>
</body>
</html>