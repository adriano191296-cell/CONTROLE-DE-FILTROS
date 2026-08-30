export default async function run(page, ui) {
  await page.waitForSelector('#mainList .equip-card', { timeout: 45000 });

  const hasInstall = await page.locator('#btnInstallHelp').count();
  const hasInstallOverlay = await page.locator('#overlayInstall').count();
  const hasEditCodigo = await page.locator('#btnManageCodigos').count();

  await page.locator('.equip-card .equip-head').first().click();
  await page.waitForSelector('.equip-card.open .filtro-codes');

  const codeFont = await page.locator('.equip-card.open .filtro-codes').first().evaluate(el => getComputedStyle(el).fontSize);
  const footerText = await page.locator('.equip-card.open .equip-footer').first().innerText();

  await page.locator('.equip-card.open [data-edit-equip]').click();
  await page.waitForSelector('#overlayEquip.show');
  const editTitle = await page.locator('#equipSheetTitle').innerText();
  const marca = await page.locator('#equipMarcaModelo').inputValue();
  const copyHidden = await page.locator('#equipCopiarWrap').evaluate(el => getComputedStyle(el).display === 'none');
  await page.locator('#btnCancelEquip').click();
  await page.waitForSelector('#overlayEquip.show', { state: 'hidden' });

  await page.locator('.equip-card.open [data-copy-equip]').click();
  await page.waitForSelector('#overlayEquip.show');
  const copyTitle = await page.locator('#equipSheetTitle').innerText();
  const copyChecked = await page.locator('#equipCopiarFiltros').isChecked();
  const copyMarca = await page.locator('#equipMarcaModelo').inputValue();
  const copyVisible = await page.locator('#equipCopiarWrap').evaluate(el => getComputedStyle(el).display !== 'none');

  return {
    hasInstall,
    hasInstallOverlay,
    hasEditCodigo,
    codeFont,
    footerText,
    editTitle,
    marca,
    copyHidden,
    copyTitle,
    copyChecked,
    copyMarca,
    copyVisible
  };
}
