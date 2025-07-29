export default () => {
    return `<section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl text-center mb-12 font-bold">Contactanos</h2>
      <form action="" class="max-w-xl mx-auto space-y-6">
        <div>
          <label for="" class="block mb-2">Nombre</label>
          <input required type="text" class="w-full border border-gray-300 rounded-lg p-2">
        </div>
        <div>
          <label for="" class="block mb-2">Correo electronico</label>
          <input required type="text" class="w-full border border-gray-300 rounded-lg p-2">
        </div>
        <div>
          <label for="" class="block mb-2">Mensaje</label>
          <textarea required rows="5" class="border w-full border-gray-300 rounded-lg p-2" name="" id=""></textarea>
        </div>
        <button type="submit" class="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">Enviar</button>
      </form>
    </div>
  </section>`;
}