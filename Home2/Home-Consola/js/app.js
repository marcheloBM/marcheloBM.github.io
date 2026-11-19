const apps = [
    ...ps2Apps,
    ...pspApps,
    ...vitaApps,
    ...ps3Apps,
    ...ps4Apps
];

const container =
document.getElementById("app-container");

function renderApps(filter = "all", search = "")
{
    container.innerHTML = "";

    const filteredApps = apps.filter(app => {

        const consoleMatch =
            filter === "all" ||
            app.console === filter;

        const searchMatch =
            app.name
            .toLowerCase()
            .includes(search.toLowerCase());

        return consoleMatch && searchMatch;
    });

    if(filteredApps.length === 0)
    {
        container.innerHTML = `
            <div class="no-results">
                <h2>🔍 Sin resultados</h2>
                <p>No se encontraron aplicaciones.</p>
            </div>
        `;
        return;
    }

let html = "";

    filteredApps.forEach(app => {

        html += `
        <div class="card">

            <div class="card-image">

				<img
					src="${app.image}"
					alt="${app.name}"
					loading="lazy"
					onerror="
						this.style.display='none';
						this.parentNode.querySelector('.fallback').style.display='flex';
					">

				<div class="fallback">
					${app.name}
				</div>

			</div>

            <div class="card-content">

                <span class="console">
                    ${app.console}
                </span>

                <h2>${app.name}</h2>

                <p>${app.description}</p>
                
                <div class="buttons">

                    <a
                        href="#"
                        class="btn guide-btn"
                        onclick="showGuide('${app.name}'); return false;">

                        Guía

                    </a>

                    ${
                        app.website
                        ?
                        `
                        <a
                            class="btn website"
                            href="${app.website}"
                            target="_blank">

                            Web Oficial

                        </a>
                        `
                        :
                        ""
                    }

                    <div class="download-menu">

                        <button
                            type="button"
                            class="btn download"
                            aria-haspopup="true"
                            aria-expanded="false">

                            Descargar ▼

                        </button>

                        <div class="download-dropdown">

                            ${
                                app.download
                                ?
                                `
                                <a
                                    href="${app.download}"
                                    target="_blank">

                                    WEB principal

                                </a>
                                `
                                :
                                ""
                            }

                            ${
                                app.mirror
                                ?
                                `
                                <a
                                    href="${app.mirror}"
                                    target="_blank">

                                    Mirror MEGA

                                </a>
                                `
                                :
                                ""
                            }

                        </div>

                    </div>

                </div>

            </div>

        </div>
        `;
		container.innerHTML = html;
    });
}

renderApps();

document
.querySelectorAll(".filter-btn")
.forEach(button => {

    button.addEventListener("click", () => {

        document
        .querySelectorAll(".filter-btn")
        .forEach(btn =>
            btn.classList.remove("active"));

        button.classList.add("active");

        renderApps(
            button.dataset.console,
            document.getElementById("search").value
        );
    });
});

document
.getElementById("search")
.addEventListener("input", (e) => {

    const activeFilter =
        document
        .querySelector(".filter-btn.active")
        .dataset.console;

    renderApps(
        activeFilter,
        e.target.value
    );
});

function showGuide(appName)
{
    const app =
        apps.find(
            item => item.name === appName
        );

    if(!app || !app.guide)
        return;

    const compatibility =
        Object.entries(app.guide.compatibility || {})
        .map(([key,value]) =>

            `<li>

                <strong>${key}</strong>

                : ${value}

            </li>`

        ).join("");

    const installation =
        (app.guide.installation || [])
        .map(step =>

            `<li>${step}</li>`

        ).join("");

    const requirements =
        (app.guide.requirements || [])
        .map(req =>

            `<li>${req}</li>`

        ).join("");

    document
    .getElementById("guideContent")
    .innerHTML = `

        <div class="guide-header">

            <img
                class="guide-image"
                src="${app.image}"

                onerror="
                    this.style.display='none';
                ">

            <div class="guide-title">

                <h2>${app.name}</h2>

                <p>${app.description}</p>

                <div class="guide-meta">

                    <strong>Versión:</strong>
                    ${app.guide.version || "N/D"}

                    <br>

                    <strong>Autor:</strong>
                    ${app.guide.author || "N/D"}

                </div>

            </div>

        </div>

        <div class="guide-section">

            <h3>Función principal</h3>

            <p>
                ${app.guide.function || ""}
            </p>

        </div>

        <div class="guide-section">

            <h3>Compatibilidad</h3>

            <ul class="compatibility">
                ${compatibility}
            </ul>

        </div>

        <div class="guide-section">

            <h3>Requisitos</h3>

            <ul>
                ${requirements}
            </ul>

        </div>

        <div class="guide-section">

            <h3>Instalación</h3>

            <ol>
                ${installation}
            </ol>

        </div>

        <div class="guide-section">

            <h3>Uso básico</h3>

            <p>
                ${app.guide.usage || ""}
            </p>

        </div>

        <div class="guide-section">

            <h3>Notas</h3>

            <p>
                ${app.guide.notes || ""}
            </p>

        </div>

    `;

    document
    .getElementById("guideModal")
    .classList.add("show");
}

function closeGuide()
{
    const modal =
        document.getElementById("guideModal");

    if(modal)
    {
        modal.classList.remove("show");
    }
}