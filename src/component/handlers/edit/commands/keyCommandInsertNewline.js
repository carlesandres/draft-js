/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @format
 * @flow
 */

'use strict';

const DraftModifier = require('DraftModifier');
const EditorState = require('EditorState');

function keyCommandInsertNewline(editorState: EditorState): EditorState {
  const contentState = DraftModifier.splitBlock(
    editorState.getCurrentContent(),
    editorState.getSelection(),
  );
  return EditorState.push(editorState, contentState, 'split-block');
}

module.exports = keyCommandInsertNewline;
