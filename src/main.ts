import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import getMac, { isMAC } from 'getmac';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const express = app.getHttpAdapter().getInstance();


  express.get('/', (req, res) => {
    res.json('Welcome to server side!');
  });

  app.listen(8800, () => {
    console.log('Backend Server Is Running!');
  });

  var macAddress = getMac().toUpperCase()

  console.log(macAddress)

  const isAddress = isMAC(macAddress).toString();

  if (isAddress == 'true') {
    console.log('is a mac address');
    try {
      if (macAddress == '30:9C:23:04:E0:C9') {
        console.log('valid mac address');
      }else {
        console.log('not valid mac address')
      }
    } catch (err) {
      err
    }
  } else {
    console.log('is not a mac address');
  }
}
bootstrap();
