import {createTestCaseSetup, readFileContent} from '@angular/cdk/schematics/testing';
import {migrationCollection} from '../index.spec';
import {writeFileSync, mkdirpSync} from 'fs-extra';
import {join} from 'path';

describe('v8 material imports', () => {

  function writeSecondaryEntryPoint(materialPath: string, name: string) {
    const entryPointPath = join(materialPath, name);
    mkdirpSync(entryPointPath);
    writeFileSync(join(entryPointPath, 'index.d.ts'), `export const ${name} = '';`);
  }

  it('should report imports for deleted animation constants', async () => {
    const {runFixers, removeTempDir, tempPath} = createTestCaseSetup(
      'migration-v8', migrationCollection, [require.resolve('./material-imports_input.ts')]);
    const materialPath = join(tempPath, 'node_modules/@angular/material');

    mkdirpSync(materialPath);
    writeFileSync(join(materialPath, 'index.d.ts'), `
      export * from './a';
      export * from './b';
      export * from './c';
    `);

    writeSecondaryEntryPoint(materialPath, 'a');
    writeSecondaryEntryPoint(materialPath, 'b');
    writeSecondaryEntryPoint(materialPath, 'c');

    await runFixers();

    const outputPath = join(tempPath,
      'projects/cdk-testing/src/test-cases/material-imports_input.ts');

    expect(readFileContent(outputPath)).toBe(
      readFileContent(require.resolve('./material-imports_expected_output.ts')));

    removeTempDir();
  });
});


