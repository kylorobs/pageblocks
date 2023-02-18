import { componentLibraryBlocks } from '../blocks';

// THIS IS A UTILITY FUNCTION WHICH LOOPS THROUGH MY OWN CUSTOM CONFIG FOR BLOCKS
// IT DOES 2 THINGS:
// 1: ADDS A NEW TYPE FOR THE BLOCK
// 2: ADDS THE BLOCK TO THE LIST OF BLOCKS

export function addCustomComponents(ed) {
  componentLibraryBlocks.forEach((cmpBlock) => {
    ed.Blocks.add(cmpBlock.labelName, {
      category: 'Library',
      label: cmpBlock.labelElement,
      attributes: { purple: true, text: 'My Custom Button' },
      content: { type: cmpBlock.name },
    });
  });
}
