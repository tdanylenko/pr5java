       // ----------- 1 ЗАВДАННЯ -----------

        const student = {
            showInfo: function () {
                document.getElementById("students").innerHTML += `
            <div class="student">
                <strong>Ім'я:</strong> ${this.name}<br>
                <strong>Спеціальність:</strong> ${this.specialty}<br>
                <strong>Середній бал:</strong> ${this.averageGrade}<br>
                <strong>Пропущено занять:</strong> ${this.missedClasses}
            </div>
        `;
            }
        };

        const student1 = {
            name: "Іван",
            specialty: "Програмування",
            averageGrade: 89,
            missedClasses: 3
        };

        const student2 = {
            name: "Марія",
            specialty: "Дизайн",
            averageGrade: 95,
            missedClasses: 1
        };

        const student3 = {
            name: "Олег",
            specialty: "Кібербезпека",
            averageGrade: 78,
            missedClasses: 5
        };

        // call
        student.showInfo.call(student1);

        // apply
        student.showInfo.apply(student2);

        // bind
        const boundFunction = student.showInfo.bind(student3);
        boundFunction();


        // ----------- 2 ЗАВДАННЯ -----------

        const result = document.getElementById("result");

        document.getElementById("htmlBtn").addEventListener("click", function () {
            result.innerText = "HTML — це мова розмітки для створення структури веб-сторінки.";
        });

        document.getElementById("cssBtn").addEventListener("click", function () {
            result.innerText = "CSS — це мова стилів для оформлення та дизайну веб-сторінки.";
        });
