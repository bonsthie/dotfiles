# If you come from bash you might have to change your $PATH.   
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="robbyrussell"


# Add wisely, as too many plugins slow down shell startup.
plugins=(git)

source $ZSH/oh-my-zsh.sh
# Environment Variables
export TERMINAL=alacritty
export EDITOR=nvim
export BROWSER=brave

export LANG=en_US.UTF-8
export LANGUAGE=en_US.UTF-8
export LC_ALL=en_US.UTF-8


#custom arch
alias x='startx'
alias inter='sh ~/tool/internet.sh'
alias nm='watch nmcli d'
alias shut='shutdown'

# Aliases
alias vim="nvim"
alias vi="vim ."
alias cdd='cd "$(dirname $(find . -type f | fzf))"'
alias mkcd='mkdir "$1" && cd "$1"'
alias pingg='ping google.com'
alias c='clear'
alias cdh='cd ~'

#ls
alias ll='ls -l'
alias la='ls -A'
alias lla='ls -la'
alias l='ls -CF'

#git
alias gs='git status'
alias ga='git add'
alias gaa='git add .'
alias gc='git commit -m'
alias gp='git push'
alias gd='git diff'
alias gl='git log'

tm() {
    if [[ -n "$TMUX" ]]; then
        # If inside a tmux session, just use the original tmux command
        command tmux "$@"
    elif [[ "$#" -eq 0 ]]; then
        command tmux new-session -s "${PWD##*/}"
    elif [[ "$#" -eq 1 && "$1" != -* ]]; then
        command tmux new-session -s "$1"
    else
        command tmux "$@"
    fi
}

fzf-tmux-session() {
    local session
    session=$(tmux list-sessions -F "#{session_name}" | fzf)
    
    if [ ! -z "$session" ]; then
        tmux attach -t "$session"
    fi
}
alias ts='fzf-tmux-session'

gcc() {
    if [[ $# -eq 1 && $1 == *".c" ]]; then
        command gcc "$1" -o "${1%.*}"
    else
        command gcc "$@"
    fi
}



