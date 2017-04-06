// Copyright 2017 The TIE Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Question data for Find Closest Value in Binary Search Tree.
 */


globalData.questions['bstClosestValue'] = {  // eslint-disable-line dot-notation
  title: 'Find Closest Value in Binary Search Tree',
  starterCode: {
    python:
`# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

def findClosestValue(input):
    root = input[0]
    target = input[1]

    #TODO : write your code after here
    return ""
`
  },
  auxiliaryCode: {
    python:
`class AuxiliaryCode(object):
    
        @classmethod
        def deserialize(cls, data):
            class TreeNode(object):
                def __init__(self, x):
                    self.val = x
                    self.left = None
                    self.right = None

                def __str__(self):
                    return self.val

            def constructTree():
                val = next(vals)
                if val == '#':
                    return None
                node = TreeNode(float(val))
                node.left = constructTree()
                node.right = constructTree()
                return node

            inputs = data.split('|')
            vals = iter(inputs[0].split())
            return constructTree(), float(inputs[1])
` 
  },
  tasks: [{
    instructions: [
      [
        'In this question, you need to find the closest value in a binary search tree ',
        'given the target value. The target value is given in float format. It\'s guaranteed ',
        'that there\'s only one closest value. You will have the root TreeNode. Each TreeNode ',
        'has attributes val, left and right.'
      ].join('')
    ],
    prerequisiteSkills: ['Binary Search Tree'],
    acquiredSkills: ['Binary Search Tree', 'Recurssion'],
    inputFunctionName: 'AuxiliaryCode.deserialize',
    outputFunctionName: null,
    mainFunctionName: 'findClosestValue',
    correctnessTests: [{
      input: '2 1 # # 3 # #|1', 
      allowedOutputs: [1]
    },
    {
      input: '10 3 # 6 4 # # 7 # # #|4.1',
      allowedOutputs: [4]
    },
    {
      input: '10 3 # # 14 # 15 14.7 # # 100 # #|14.6',
      allowedOutputs: [14.7]
    },
    { input: '2.5 # #|3.2',
      allowedOutputs: [2.5]
    }],
    buggyOutputTests: [],
    performanceTests: []
  }],
  styleTests: []
};

