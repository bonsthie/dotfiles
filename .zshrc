export ZSH="$HOME/.oh-my-zsh"
export PATH=".local/bin:$PATH"
export LD_LIBRARY_PATH=/usr/lib:$LD_LIBRARY_PATH
export TERM=xterm-256color

export DEBUGINFOD_URLS="https://debuginfod.archlinux.org"


# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="robbyrussell"



# Add wisely, as too many plugins slow down shell startup.
plugins=(git)
plugins+=(zig-shell-completions)

source $ZSH/oh-my-zsh.sh

PS1=' %(?:%F{green}➜%f :%F{red}➜%f ) %F{6}%c%f $(git_prompt_info)'

# Environment Variables
export TERMINAL=ghostty
export EDITOR=nvim
export BROWSER=brave

export LANG=en_US.UTF-8
export LANGUAGE=en_US.UTF-8
export LC_ALL=en_US.UTF-8


#custom arch
alias x='startx'
alias inter='sh ~/tool/internet.sh'
alias pipes="sh ~/apk/pipes.sh/pipes.sh"
alias shut='shutdown now'
alias battery="acpi"
alias udiscord="sudo pacman -Sy discord"

# Aliases
alias vim="nvim"
alias vi="vim ."
alias pingg='ping google.com'
alias c='clear'

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

export XSECURELOCK_SAVER=saver_xscreensaver
export XSECURELOCK_SHOW_DATETIME=1
export XSECURELOCK_DATETIME_FORMAT="%Y-%m-%d %H:%M:%S"
export XSECURELOCK_PASSWORD_PROMPT=asterisks
alias lock="xlock"

# tmux session manager make session with
# pane 1 neovim
# pane 2 terminal
new_tmux_session() {
    local session_name="$1"
    local tmux_cmd="attach"

    if [ -n "$TMUX" ]; then
        tmux_cmd="switch-client"
    fi

   # Check if the session already exists
    if tmux has-session -t "$session_name" 2>/dev/null; then
        echo "Session $session_name already exists."
        tmux $tmux_cmd -t "$session_name"
        return
    fi

    echo "Creating new tmux session: $session_name"
    
    tmux new-session -d -s "$session_name" -n vim

    tmux send-keys -t "$session_name":1 "vim ." C-m

    tmux new-window -t "$session_name" -n shell

    tmux select-window -t  "$session_name" 1

    tmux $tmux_cmd -t "$session_name"
}

# autoname the session base on the current directory
tm() {
    if [[ "$#" -eq 0 ]]; then
        session_name="${PWD##*/}"
    elif [[ "$1" =~ ^-([0-9]+)$ ]]; then
        N=${match[1]}
        IFS='/' read -rA ADDR <<< "${PWD#/}"
        session_name="${(j:/:)ADDR[-N,-1]}"
    elif [[ "$#" -eq 1 && "$1" != -* ]]; then
        session_name="$1"
    else
        new_tmux_session "$@"
        return
    fi

    new_tmux_session "$session_name"
}

# fuzzy find tmux session
fzf-tmux-session() {
    local session
    session=$(tmux list-sessions -F "#{session_name}" | fzf)

    if [ ! -z "$session" ]; then
        tmux attach -t "$session"
    fi
}
alias ts='fzf-tmux-session'


cdd_function() {
    local base_dir="${1:?No directory provided}"
    local depth="${2:-3}"

    local dir_path="$(find "$base_dir" -maxdepth "$depth" -type d -name '.git' 2>/dev/null \
        | sed -E "s|^$base_dir/||; s|/\.git$||" | fzf)"

    if [[ -z "$dir_path" ]]; then
        echo "No project selected."
        return 1
    fi

    (cd "$base_dir/$dir_path" && tm "$dir_path")
}
alias cdd='cdd_function "$HOME/Documents/code" 4'
alias cdl='cdd_function "$HOME/Documents/code/lib" 2'
alias cdc='cdd_function "$HOME/.config" 1'
alias tmp='(cd /tmp && new_tmux_session /tmp)'

np() {
  local project_dir="$HOME/Documents/code/$1"
  mkdir -p "$project_dir"
  ( cd "$project_dir"             \
    && git init                   \
    && tm                         \
  )
}

nl() {
  local url="$1"
  local session_name="${(j:/:)url[-2,-1]}"
  ( cd "$HOME/Documents/code/lib"						\
    && git clone --depth 1 "$url"						\
	&& cd $session_name									\
    && tm  -2											\
  )
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
    # Initialize gdb_flag variable
    local gdb_flag=""
    local output_name=""
    local files=()

    # Loop through arguments
    for arg in "$@"; do
        if [[ "$arg" == "-g" ]]; then
            gdb_flag="-g" # Set gdb_flag if -g is found
        elif [[ "$arg" == *".c" && -z "$output_name" ]]; then
            output_name="${arg%.*}" # Set output_name if it's a .c file and output_name is empty
            files+=("$arg") # Add the file to the array of files
        else
            files+=("$arg") # Add the file to the array of files
        fi
    done

    # If output_name is empty but files are not, use the first file's name
    if [[ -z "$output_name" && "${#files[@]}" -gt 0 ]]; then
        output_name="${files[0]%.*}"
    fi

    # If output_name is still empty, print an error message and return
    if [[ -z "$output_name" ]]; then
        echo "Error: No .c file provided for output name."
        return 1
    fi

    # Call gcc with all arguments
    command gcc $gdb_flag "${files[@]}" -o "$output_name"
}

mkcd() {
  mkdir -p "$1" && cd "$1"
}

function gclb(){
	git clone git@github.com:bonsthie/"$1".git
}
export LD_LIBRARY_PATH=/usr/lib:$LD_LIBRARY_PATH

# Source fzf completion and key bindings
[ -f /usr/share/fzf/completion.zsh ] && source /usr/share/fzf/completion.zsh
[ -f /usr/share/fzf/key-bindings.zsh ] && source /usr/share/fzf/key-bindings.zsh

export PATH="$HOME/.nix-profile/bin:/nix/var/nix/profiles/default/bin:$PATH"
export LD_LIBRARY_PATH=/nix/var/nix/profiles/default/lib
eval "$(direnv hook zsh)"
export PATH=/usr/lib/jvm/default/bin:$PATH
