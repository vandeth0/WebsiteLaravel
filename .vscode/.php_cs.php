<?php

return PhpCsFixer\Config::create()
    ->setRules([
        '@Symfony'                          => true,
        'binary_operator_spaces'            => ['align_double_arrow' => true],
        'method_chaining_indentation'       => true,
        'method_argument_space'             => true,
        'array_syntax'                      => ['syntax' => 'short'],
        'linebreak_after_opening_tag'       => true,
        'not_operator_with_successor_space' => true,
        'ordered_imports'                   => true,
        'phpdoc_order'                      => true,
        'braces'                            => [
            'allow_single_line_closure'                   => true,
            'position_after_functions_and_oop_constructs' => 'same',
        ],
    ]);
