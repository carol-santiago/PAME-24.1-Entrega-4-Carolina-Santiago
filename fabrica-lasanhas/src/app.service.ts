import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    const filePath = join(__dirname, '..', 'guia.txt');
    const fileContent = readFileSync(filePath, 'utf8');
    const contentWithLineBreaks = fileContent.replace(/\n/g, '<br>');
    return contentWithLineBreaks;
  }
}
