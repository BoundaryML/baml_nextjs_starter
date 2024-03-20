// This file is auto-generated. Do not edit this file manually.
//
// Disable formatting for this file to avoid linting errors.
// tslint:disable
// @ts-nocheck
/* eslint-disable */

import b from '../';

import { FireBamlEvent, traceAsync } from '@boundaryml/baml-core/ffi_layer';


describe('test_case:jason', () => {
  const test_fn = traceAsync('jason', 'null', [['impl', 'string']], 'positional', async (impl) => {
    FireBamlEvent.tags({
      'test_dataset_name': 'ExtractResume',
      'test_case_name': 'test',
      'test_case_arg_name': `test_jason[ExtractResume-${impl}]`,
      'test_cycle_id': process.env.BOUNDARY_PROCESS_ID || 'local-run',
    });
    const test_case = "Jason Doe\nPython, Rust\nUniversity of California, Berkeley, B.S.\nin Computer Science, 2020\nAlso an expert in Tableau, SQL, and C++\n";
    const result = await b.ExtractResume.getImpl(impl).run(
      test_case
    );
  });

  describe('function:ExtractResume', () => {
    test('impl:version1', async () => {
      await test_fn('version1');
    }, 60000);
  });
});

describe('test_case:sarah', () => {
  const test_fn = traceAsync('sarah', 'null', [['impl', 'string']], 'positional', async (impl) => {
    FireBamlEvent.tags({
      'test_dataset_name': 'ExtractResume',
      'test_case_name': 'test',
      'test_case_arg_name': `test_sarah[ExtractResume-${impl}]`,
      'test_cycle_id': process.env.BOUNDARY_PROCESS_ID || 'local-run',
    });
    const test_case = "Sarah Montez\nHarvard University\nMay 2015-2019\n3.92 GPA\nGoogle\nSoftware Engineer\nJune 2019-Present\n- Backend engineer\n- Rewrote search and uplifted metrics by 120%\n- Used C++ and Python\nMicrosoft\nSoftware Intern\nJune 2018-August 2018\n- Worked on the Windows team\n- Updated the UI\n- Used C++\n";
    const result = await b.ExtractResume.getImpl(impl).run(
      test_case
    );
  });

  describe('function:ExtractResume', () => {
    test('impl:version1', async () => {
      await test_fn('version1');
    }, 60000);
  });
});


