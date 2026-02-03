const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

exports.gerarFichaPDF = async (req, res) => {
  try {
    const ficha = req.body;
    // O nome do arquivo deve bater com o que você subiu
    const path = `./assets/templates/DnD 5e - Ficha - ${ficha.classe} - Editável.pdf`;
    const pdfBytes = fs.readFileSync(path);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const form = pdfDoc.getForm();

    // Exemplo de preenchimento baseado nos campos do seu PDF
    form.getTextField('NOME DE PERSONAGEM').setText(ficha.nomePersonagem);
    form.getTextField('FORÇA').setText(ficha.atributos.forca.toString());

    const pdfAlterado = await pdfDoc.save();
    res.contentType("application/pdf");
    res.send(Buffer.from(pdfAlterado));
  } catch (err) {
    res.status(500).json({ error: "Erro ao gerar PDF: " + err.message });
  }
};
