-- clangd setup
require'lspconfig'.clangd.setup{
  cmd = { "clangd", "--background-index" },
  filetypes = { "c", "cpp", "objc", "objcpp" },
  on_attach = function(client)
    print("Clangd LSP started.")
  end
}

-- nvim-cmp setup
local cmp = require'cmp'
cmp.setup({
  snippet = {
    expand = function(args)
      vim.fn["vsnip#anonymous"](args.body)
    end,
  },
  mapping = {
    ['<C-p>'] = cmp.mapping.select_prev_item(),
    ['<C-n>'] = cmp.mapping.select_next_item(),
    ['<C-y>'] = cmp.mapping.confirm({ select = true }),
  },
  sources = {
    { name = 'nvim_lsp' },
  }
})

vim.keymap.set("n", "gd", function() vim.lsp.buf.definition() end, opts)
