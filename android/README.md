# Controle de Filtros no Android

Este projeto Android gera um APK real usando o `index.html` da raiz como asset local.
O aplicativo abre sem internet porque o HTML, o manifesto, o service worker e o icone sao copiados para dentro do APK no build.

## Gerar APK

1. Abra a pasta `android` no Android Studio.
2. Aguarde o Gradle sincronizar.
3. Use `Build > Build Bundle(s) / APK(s) > Build APK(s)`.
4. Instale o APK gerado no celular.

Pelo terminal, com Android SDK e Gradle disponiveis:

```powershell
cd android
gradle assembleDebug
```

O APK debug fica em `android/app/build/outputs/apk/debug/app-debug.apk`.

## Observacao

Os dados continuam sendo salvos no proprio aparelho via IndexedDB/WebView. Antes de trocar de celular ou reinstalar, use o botao de backup JSON do app.
