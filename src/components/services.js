export default services = () =>{
    return `<section id="Servicios" class="py-20 bg-gray-50">
      <div class=" container mx-auto px-4">
        <h2 class="text-3xl mb-12 text-center font-bold">Nuestros servicios</h2>
        <div class="grid md: grid-cols-3 gap-10">
          <article class="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">Desarrollo web</h3>
            <p>Construimos sitios rápidos, responsivos y con diseño atractivo usando tecnologías modernas.</p>
          </article>
          <article class="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">Aplicaciones a medida</h3>
            <p>Soluciones a medida según tus necesidades: CRM, dashboards, intranets y más.</p>
          </article>
          <article class="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">Diseño UX/UI</h3>
            <p>Interfaces intuitivas que brindan una experiencia óptima para tus usuarios.</p>
          </article>
        </div>
      </div>
    </section>`;
}